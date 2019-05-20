console.log(process.env.test)

const manifest = {
  server: {
    port: 8000
  },
  register: {
    plugins: [
      // './awesome-plugin.js',
      // {
      //   plugin: require('myplugin'),
      //   options: {
      //     uglify: true
      //   }
      // },`
      // {
      //   plugin: './ui-user'
      // }
      // {
      //   plugin: './ui-admin',
      //   options: {
      //     sessiontime: 500
      //   },
      //   routes: {
      //     prefix: '/admin'
      //   }
      // }
    ]
    // options: {
    //   once: false
    // }
  }
}

const options = {
  relativeTo: __dirname
}

module.exports = { manifest, options }
