"use strict";

var _square = _interopRequireDefault(require("./square"));

var _sum = _interopRequireDefault(require("./sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.writeln('The sum of 5 and 8 is ', (0, _sum.default)(5, 8), '<br>');
document.writeln('The square of 6 is ', (0, _square.default)(6), '<br>');