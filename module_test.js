//zad 2 wersja 2
const Math2 = require('./myMathModule2');

const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Put 1st number ",function(number1) {
    r1.question("Put 2nd number ",function(number2){
        let math2 = new Math2(number1,number2);
        console.log(number1+"%"+number2+"="+math2.mod());
        console.log(number1+"-"+number2+"="+math2.sub());
        console.log(number1+"*"+number2+"="+math2.mul());
        console.log(number1+"^2"+"="+math2.pow1());
        console.log(number2+"^2"+"="+math2.pow2());
        console.log(number1+"/"+number2+"="+math2.div());
        r1.close();
    })
});