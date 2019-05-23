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
    console.log(`Server listening on ${server.info.uri}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
