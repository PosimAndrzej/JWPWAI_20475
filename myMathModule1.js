//zad 2 wersja 1
exports.mod = function(x1,x2){
    return x1%x2;
}
exports.sub = function(x1,x2){
    return x1-x2;
}
exports.mul = function(x1,x2){
    return x1*x2;
}
exports.pow = function(x1){
    return x1*x1;
}
exports.div = function(x1,x2){
    if(x2!=0){
        return x1/x2;
    }
    else{
        return "Nie da się dzielić przez zero!";
    }
}
