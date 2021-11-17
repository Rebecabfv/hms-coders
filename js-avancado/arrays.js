// Criando uma array e acessando um índice
const alunaGama = ["Bruna", "Gabriela", "Maria"];
console.log (alunaGama[3]);

// Operador sprend (...)
// Copia os dados de outro array sem alterá-lo
const alunaXp = [...alunaGama, "Clara"];
console.log (alunaXp);

//Métodos de iteração de array

// 1 - Map: retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos
const alunas = ["Paula", "Maria", "Estela", "Clara"];
alunas.map(aluna => console.log(aluna));


// 2 - Filter: retorna um novo array com os elementos filtrados
const numeros = [34, 35, 67, 90, 55, 76];
const numerosImpares = numeros.filter(numero => numero%2 != 0);
console.log(numerosImpares);


// 3 - Find: encontra e retorna o primeiro elemeto que achar igual ao elemento passado por parâmetro
const produtos = ["geladeira", "fogao", "cama", "mesa"];
const encontraCama = produtos.find(produto => produto == "cama");
console.log(encontraCama);

//4 - Sort: ordena o array
const num = [34, 45, 76, 90, 55, 110];
// se não passar nenhum parâmetro ele ordena em ordem crescente
const crescente = num.sort((a,b) => a-b);
console.log(crescente);

//decrescente
const decrescente = num.sort((a,b) => b-a);
console.log(decrescente);

// 5 - Reduce: reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 34, 35];
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
})
console.log(soma);