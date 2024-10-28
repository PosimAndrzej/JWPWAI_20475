//wersja 2
const Currency = require('./currency2');
let canadianDollar = 2.89;
let usDollar = 4.02;
let gbp = 5.21;
let eur = 4.35;
let czk = 0.17;
let currency2 = new Currency(canadianDollar,usDollar,gbp,eur,czk);

console.log('50 dolarów kanadyjskich odpowiada następującej ilości złotych:');
console.log(currency2.canadianToPLN(50));

console.log('50 dolarów amerykańskich odpowiada następującej ilości złotych:');
console.log(currency2.USToPLN(50));

console.log('50 funtów brytyjskich odpowiada następującej ilości złotych:');
console.log(currency2.GBPToPLN(50));

console.log('50 euro odpowiada następującej ilości złotych:');
console.log(currency2.EURToPLN(50));

console.log('50 koron czeskich odpowiada następującej ilości złotych:');
console.log(currency2.CZKToPLN(50));
