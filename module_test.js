//zad 2 wersja 1
const math1 = require('./myMathModule1');

const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Put 1st number",function(number1) {
    r1.question("Put 2nd number",function(number2){
        console.log(number1+"%"+number2+"="+math1.mod(number1,number2));
        console.log(number1+"-"+number2+"="+math1.sub(number1,number2));
        console.log(number1+"*"+number2+"="+math1.mul(number1,number2));
        console.log(number1+"^2"+"="+math1.pow(number1));
        console.log(number2+"^2"+"="+math1.pow(number2));
        console.log(number1+"/"+number2+"="+math1.div(number1,number2));
        r1.close();
    })
});