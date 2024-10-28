//wersja 2

let Currency = function(canadianDollar,usDollar,gbp,eur,czk){
    this.canadianDollar = canadianDollar;
    this.usDollar = usDollar;
    this.gbp = gbp;
    this.eur = eur;
    this.czk = czk;
}


Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}
Currency.prototype.canadianToPLN = function(canadian) {
    return this.roundTwoDecimals(canadian * this.canadianDollar);
}
Currency.prototype.USToPLN = function(us) {
    return this.roundTwoDecimals(us * this.usDollar);
}
Currency.prototype.GBPToPLN = function(funt) {
    return this.roundTwoDecimals(funt * this.gbp);
}
Currency.prototype.EURToPLN = function(euro) {
    return this.roundTwoDecimals(euro * this.eur);
}
Currency.prototype.CZKToPLN = function(korona) {
    return this.roundTwoDecimals(korona * this.czk);
}

module.exports = exports = Currency;