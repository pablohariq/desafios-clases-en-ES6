"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto = new _impuesto["default"](1000, 200);
console.log("Monto Bruto Anual: ".concat(impuesto._monto_bruto_anual, ", Deducciones: ").concat(impuesto._deducciones));
var c1 = new _cliente["default"]("Pedro", impuesto);
console.log("Impuesto de ".concat(c1.nombre, ": ").concat(c1.calcularImpuesto()));