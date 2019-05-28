const hapiJwt = require('hapi-auth-jwt2')
const { verifyToken } = require('../components/user').contoller.helpers
function register(server, options) {
  server.register(hapiJwt)
  server.auth.strategy('jwt', 'jwt', {
    key: 'someKey',
    validate: async function(decoded, request) {
      let validity = await verifyToken(decoded)
      return validity
    },
    verifyOptions: { algorithms: ['HS256'] }
  })

  server.auth.default('jwt')
}
const authPlugin = {
  plugin: { register, name: 'jwt' }
}

module.exports = authPlugin
