function userController() {
  /* Route hanlders */
  const handlers = {
    test(req, h) {
      return { test: 'test' }
    }
  }

  /* Controller helper functions */

  const helpers = {}

  return {
    handlers: Object.freeze(handlers),
    helpers: Object.freeze(helpers)
  }
}

module.exports = userController()
