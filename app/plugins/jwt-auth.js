const hapiJwt = require('hapi-auth-jwt2')

function authWrapper(server, options, next) {
  server.register(hapiJwt)
  server.auth.strategy('jwt', 'jwt', {
    key: 'someKey',
    validate: function(decoded, request) {
      return { isValid: true }
    },
    verifyOptions: { algorithms: ['HS256'] }
  })

  server.auth.default('jwt')
  next()
}

module.exports = authWrapper
