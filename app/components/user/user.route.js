const routes = [
  /* GET - /user */
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return { blah: 'asdadad' }
    }
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
