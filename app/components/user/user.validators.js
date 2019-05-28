const joi = require('@hapi/joi')

function userValidators(route) {
  const validators = {
    userLogin: {
      payload: {
        username: joi.string().required(),
        password: joi.string().required()
      }
    }
  }

  if (!validators[route]) throw new Error('Invalid route')

  return validators[route]
}

module.exports = userValidators
