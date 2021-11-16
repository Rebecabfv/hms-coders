// if.. else
function maiorDeIdade(idade){
    if (idade >= 18){
        // Usando templete string
        return `Sua idade é ${idade} e você é maior de idade`;
    } else {
        return 'Menor de idade'
    }
}


// Usando operador ternário
function calculaIdade(idade){
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(calculaIdade(19));
console.log(maiorDeIdade(19));

