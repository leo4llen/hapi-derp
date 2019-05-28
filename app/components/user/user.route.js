const { handlers, helpers } = require('./user.controller')

const routes = [
  /* GET - /user */
  {
    method: 'GET',
    path: '/',
    config: {
      auth: false
    },
    handler: handlers.open
  },
  /* GET - /user/getToken - Get a token to test JWT */
  {
    method: 'GET',
    path: '/login',
    config: {
      auth: false
    },
    handler: handlers.login
  },
  /* GET - /user/protected - protected route */
  {
    method: 'GET',
    path: '/protected',
    config: {
      auth: 'jwt'
    },
    handler: handlers.protected
  }
]

module.exports = {
  plugin: {
    register(server) {
      server.dependency('hapi-auth-jwt2')
      server.route(routes)
    },
    name: 'user-route'
  },
  routes: {
    prefix: '/user'
  }
}
