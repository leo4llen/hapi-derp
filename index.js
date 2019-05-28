const { join } = require('path')
const { log, error } = require('./utils').logs
require('dotenv').config({ path: join(__dirname, `${process.argv[2]}`) })
const Glue = require('@hapi/glue')
const serverConfig = require('./config')

const startServer = async function() {
  try {
    const options = { relativeTo: __dirname }
    const manifest = await serverConfig.manifest()
    const server = await Glue.compose(
      manifest,
      options
    )

    await server.start()
    log(`Server listening on ${server.info.uri}`)
  } catch (err) {
    error(err)
    process.exit(1)
  }
}

startServer()
