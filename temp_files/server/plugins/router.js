const routes = [].concat(require('../routes/index'))

module.exports = {
  routes: {
    prefix: '/api'
  },
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
