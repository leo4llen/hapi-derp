import { Server } from '@hapi/hapi'

const server = Server({ port: 5555 })

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => ({ message: 'Hello Hapi.js' })
  })

  await server.start()
  console.log('Server is runninggggggggggggggg')
}

init()
