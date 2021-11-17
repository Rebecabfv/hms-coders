const pessoa = {
    nome: "Rebeca",
    idade: 23,
    cidade: "Conceição dos Ouros"
}

// Notação de ponto - capturando alguma informação do objeto
console.log(pessoa.nome);

// Notação de colchetes
console.log(pessoa['idade']);

// Desestruturando objetos
const {nome, idade, cidade} = pessoa;
console.log(nome, idade, cidade);