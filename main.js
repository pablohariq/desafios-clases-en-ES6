import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuesto = new Impuesto(1000,200);
console.log(`Monto Bruto Anual: ${impuesto._monto_bruto_anual}, Deducciones: ${impuesto._deducciones}`)

let c1 = new Cliente("Pedro", impuesto)
console.log(`Impuesto de ${c1.nombre}: ${c1.calcularImpuesto()}`)
