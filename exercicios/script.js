/* EXERCÍCIO 1: FizzBuzz
Divisivel por 3 = 'Fizz';
Divisivel por 5 = 'Buzz';
Divisivel por 3 e 5 = 'FizzBuzz'
Se não for um número = 'Não é um número'
Se não for divisivel nem por 3 e nem por 5 = Entrada */

let resultado = fizzBuzz(8);
console.log(resultado);

function fizzBuzz (entrada){
    var entrada = entrada;
    if (typeof entrada === 'number'){
        if (entrada % 5 === 0 && entrada % 3 === 0){
        return 'FizzBuzz';
        } else if (entrada % 3 === 0){
            return 'Fizz';
        } else if (entrada % 5 === 0){
            return 'Buzz';
        } else {
            return entrada;
        }
    } else {
        return 'Não é um número';
    }
}

// EXERCÍCIO 2: Reverse a string

let newStr = '';

function reverseAString (str){
    for (let i = str.length -1; i >= 0; i--){
        newStr += str[i];
    }
    console.log(newStr);
}

reverseAString('Hello Gama Academy');

// EXERCÍCIO 3: Conversor de Celsius para Fahreheit

function convertToFahrenheit(value){
    return value = 1.8 * 32;
}

let result = convertToFahrenheit(1);
console.log(`O resultado em Fahrenheit é: ${result}`);

