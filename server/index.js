require('dotenv').config()
const Glue = require('@hapi/glue')
const { manifest, options } = require('./manifest')

const init = async () => {
  try {
    const server = await Glue.compose(
      manifest,
      options
    )
    await server.start()
    console.log('Server is runninggggggggggggggg')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

init()
