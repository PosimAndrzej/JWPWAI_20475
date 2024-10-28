//wersja 1
let currency = require('./currency1');

console.log('50 dolarów kanadyjskich odpowiada następującej ilości złotych:');
console.log(currency.canadianToPLN(50));

console.log('50 dolarów amerykańskich odpowiada następującej ilości złotych:');
console.log(currency.USToPLN(50));

console.log('50 funtów brytyjskich odpowiada następującej ilości złotych:');
console.log(currency.GBPToPLN(50));

console.log('50 euro odpowiada następującej ilości złotych:');
console.log(currency.EURToPLN(50));

console.log('50 koron czeskich odpowiada następującej ilości złotych:');
console.log(currency.CZKToPLN(50));
