// function

function sum(a,b){
    return a + b;
}

console.log(sum(3,5));

// arrow function - usado para função anonimas ou funcao enquanto callback

// nome da função = parametros que ela vai receber => o que ela vai retornar
const soma = (num1, num2) => num1 + num2;

// quando a função recebe só um parâmetro não precisa colocar entra parenteses
const sayHello = name => `Hello ${name}`;

console.log(sayHello("Mary"));