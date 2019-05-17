"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hapi = _interopRequireDefault(require("@hapi/hapi"));

var server = _hapi["default"].Server({
  port: 5555
});

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            server.route({
              method: 'GET',
              path: '/',
              handler: function handler(req, h) {
                return {
                  message: 'Hello Hapi.js'
                };
              }
            });
            _context.next = 3;
            return server.start();

          case 3:
            console.log('Server is runninggggggggggggggg');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();