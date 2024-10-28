//zad2 wersja 2
let Math2 = function(x1,x2){
    this.x1 = x1;
    this.x2 = x2;
}

Math2.prototype.mod = function(){
    return this.x1%this.x2;
}
Math2.prototype.sub = function(){
    return this.x1-this.x2;
}
Math2.prototype.mul = function(){
    return this.x1*this.x2;
}
Math2.prototype.pow1 = function(){
    return this.x1*this.x1;
}
Math2.prototype.pow2 = function(){
    return this.x2*this.x2;
}
Math2.prototype.div = function(){
    if(this.x2!=0){
        return this.x1/this.x2;
    }
    else{
        return "Nie da się dzielić przez zero!";
    }
}

module.exports = exports = Math2;