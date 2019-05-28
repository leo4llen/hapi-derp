const hapiJwt = require('hapi-auth-jwt2')

function register(server, options) {
  server.register(hapiJwt)
  server.auth.strategy('jwt', 'jwt', {
    key: 'someKey',
    validate: async function(decoded, request) {
      return { isValid: true }
    },
    verifyOptions: { algorithms: ['HS256'] }
  })

  server.auth.default('jwt')
}
const authPlugin = {
  plugin: { register, name: 'jwt' }
}

module.exports = authPlugin
