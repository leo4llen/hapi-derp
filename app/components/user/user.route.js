const { handlers, helpers } = require('./user.controller')

const routes = [
  /* GET - /user */
  {
    method: 'GET',
    path: '/',
    config: {
      auth: 'jwt'
    },
    handler: handlers.test
  }
]

module.exports = {
  plugin: {
    async register(server, options) {
      server.dependency('hapi-auth-jwt2')
      server.route(routes)
    },
    name: 'user-route'
  },
  routes: {
    prefix: '/user'
  }
}
