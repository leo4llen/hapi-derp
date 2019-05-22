exports.manifest = {
  server: {
    router: {
      stripTrailingSlash: true,
      isCaseSensitive: false
    },
    routes: {
      // TODO: Security measures that needs to be added later
      // security: {
      //     hsts: false,
      //     xss: true,
      //     noOpen: true,
      //     noSniff: true,
      //     xframe: false
      // },
    },
    debug: Config.debug,
    port: Config.port
  },
  register: {
    plugins
  }
}
