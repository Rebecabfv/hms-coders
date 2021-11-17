// No terminal para iniciar um projeto node: npm init -y --> cria o arquivo package.json (info do projeto e alteração do scripts para start e o arquivo que vamos iniciar o projeto - app.js)
// Biblioteca readline-sync: npm i readline-sync --> permite que recebermos entrada do usuário

// Importar os dados 
const livros = require('./database.js');

// Pegar o input do usuário
const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro? S/N');

// Se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:');
    console.log('Produtividade', '/ História brasileira', '/ Américas', '/ Tecnologia', '/ Estilo de vida');

    const entradaCategoria = readline.question('Qual categoria voce escolhe?');

    //Retornando de acordo com a categoria escolhida:
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);

// Se for não, mostra todos os livros em ordem crescente pela quantidade de páginas
} else {
    //Ordenar os livros de acordo com o número de páginas
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.log('Esses são todos os livros disponíveis:');
    console.table(livrosOrdenados);
}



