require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  dbUri: (env => {
    let dbUri = ''
    switch (env) {
      case 'development':
        dbUri = process.env.LOCAL_DB
        break
      default:
        break
    }
    return dbUri
  })(process.env.NODE_ENV)
}
