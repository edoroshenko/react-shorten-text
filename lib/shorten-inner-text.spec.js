'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var TIMEOUT = 20000;

describe('Google', function () {
  beforeAll(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return page.goto('http://localhost:3001/index.html');

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })), TIMEOUT);

  it('should display "google" text on page', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var divsCounts;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return page.$$eval('td', function (divs) {
              return divs.length;
            });

          case 2:
            divsCounts = _context2.sent;
            return _context2.abrupt('return', expect(divsCounts).toBe(18));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })), TIMEOUT);
});