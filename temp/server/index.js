const hapi = require('hapi')
const config = require('./config')
const inert = require('@hapi/inert')
const path = require('path')

async function createServer() {
  const server = hapi.server({
    port: config.port,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    }
  })

  await server.register(require('./plugins/router'))

  await server.register(inert)

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public'),
        index: ['index.html']
      }
    }
  })

  if (config.env === 'development') {
    await server.register(require('./plugins/logging'))
  }

  return server
}

module.exports = createServer
