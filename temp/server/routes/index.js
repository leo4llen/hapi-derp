const { getPages, insertPage, updatePage, deletePage } = require('../handlers')
const joi = require('joi')

module.exports = [
  {
    method: 'GET',
    path: '/page/{name?}',

    handler: getPages
  },

  {
    method: 'POST',
    path: '/page',
    options: {
      validate: {
        payload: {
          name: joi.string().required(),
          pageData: joi.string()
        }
      }
    },
    handler: insertPage
  },

  {
    method: 'PUT',
    path: '/page/{name}',
    options: {
      validate: {
        payload: {
          pageData: joi.string()
        }
      }
    },
    handler: updatePage
  },

  {
    method: 'DELETE',
    path: '/page/{name}',
    handler: deletePage
  }
]
