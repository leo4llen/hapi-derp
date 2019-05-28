const jwt = require('jsonwebtoken')
const { log, error } = require('../../../utils').logs
const { unauthorized, badImplementation } = require('@hapi/boom')
function userController() {
  /* Controller helper functions */
  const helpers = {
    validateUser: async data =>
      data.username === 'test' && data.password === 'test@123'
  }

  /* Route hanlders */
  const handlers = {
    open(req, h) {
      try {
        return { data: "You've reached an open route" }
      } catch (e) {
        error(e)
        return badImplementation('Something went wrong!')
      }
    },
    async login(req, h) {
      try {
        let validUser = await helpers.validateUser({
          username: 'test',
          password: 'test@123'
        })
        log(validUser)
        if (!validUser) return unauthorized('Invalid user')

        const token = jwt.sign(
          {
            username: 'test',
            password: 'test@123'
          },
          'someKey',
          { algorithm: 'HS256' }
        )

        return {
          data: token
        }
      } catch (e) {
        error(e)
        return badImplementation('Something went wrong!')
      }
    },
    protected(req, h) {
      try {
        return {
          data: "You've reached a protected route using a valid token"
        }
      } catch (e) {
        error(e)
        return badImplementation('Something went wrong!')
      }
    }
  }

  return {
    helpers: Object.freeze(helpers),
    handlers: Object.freeze(handlers)
  }
}

module.exports = userController()
