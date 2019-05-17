const db = require('../db')
const { badImplementation, badRequest, notFound } = require('@hapi/boom')

function handlers() {
  const methods = {
    insertPage: async (req, h) => {
      try {
        let name = encodeURIComponent(req.payload.name)
        console.log(name)
        let existingData = await db.query(`SELECT *  FROM pages WHERE name='${name}'`)

        if (existingData.length) {
          return badRequest('Page already exists')
        }

        await db.query(
          `INSERT INTO pages (name, pageData) VALUES ('${name}', '${req.payload.pageData}')`
        )
        return {
          statusCode: 200,
          message: 'Page created successfully',
          error: null
        }
      } catch (e) {
        return badImplementation(e)
      }
    },

    updatePage: async (req, h) => {
      try {
        let name = encodeURIComponent(req.params.name)
        let existingData = await db.query(`SELECT *  FROM pages where name='${name}'`)

        if (!existingData.length) {
          return notFound("Page data doesn't exist")
        }

        await db.query(`UPDATE pages SET pageData='${req.payload.pageData}' WHERE name='${name}'`)

        return {
          statusCode: 200,
          message: 'Page updated successfully',
          error: null
        }
      } catch (e) {
        return badImplementation(e)
      }
    },

    getPages: async (req, h) => {
      try {
        let name = encodeURIComponent(req.params.name)
        let queryString = 'SELECT *  FROM pages'
        if (name && name != 'undefined') {
          queryString += ` where name = '${name}'`
        }

        let data = await db.query(queryString)

        return {
          statusCode: 200,
          message: 'Page loaded successfully',
          error: null,
          data
        }
      } catch (e) {
        return badImplementation(e)
      }
    },

    deletePage: async (req, h) => {
      try {
        let name = encodeURIComponent(req.params.name)

        await db.query(`DELETE FROM pages WHERE name='${name}'`)
        return {
          statusCode: 200,
          message: 'Page deleted successfully',
          error: null
        }
      } catch (e) {
        return badImplementation(e)
      }
    }
  }

  return Object.freeze(methods)
}

module.exports = handlers()
