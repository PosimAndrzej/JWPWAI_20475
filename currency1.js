//wersja 1
let canadianDollar = 2.89;
let usDollar = 4.02;
let gbp = 5.21;
let eur = 4.35;
let czk = 0.17;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}
exports.canadianToPLN = function(canadian) {
    return roundTwoDecimals(canadian * canadianDollar);
}
exports.USToPLN = function(us) {
    return roundTwoDecimals(us * usDollar);
}
exports.GBPToPLN = function(funt) {
    return roundTwoDecimals(funt * gbp);
}
exports.EURToPLN = function(euro) {
    return roundTwoDecimals(euro * eur);
}
exports.CZKToPLN = function(korona) {
    return roundTwoDecimals(korona * czk);
}
