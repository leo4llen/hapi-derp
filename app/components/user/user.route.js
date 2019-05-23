const { handlers, helpers } = require('./user.controller')

const routes = [
  /* GET - /user */
  {
    method: 'GET',
    path: '/',
    handler: handlers.test
  }
]

module.exports = {
  plugin: {
    async register(server, options) {
      server.route(routes)
    },
    name: 'user-route'
  },
  routes: {
    prefix: '/user'
  }
}
