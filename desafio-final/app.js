// Importar os dados 
const cursos = require('./database.js');

// Pegar o input do usuário
const readline = require('readline-sync');


/* Funções que precisa ser criada:
● criarCurso: recebe todos os dados por parâmetro e adiciona na lista de cursos
como objeto.
● exibirCurso: recebe o id de um curso por parâmetro e imprime todos os dados
do curso selecionado.

● atualizarCurso: recebe todos os dados por parâmetro e atualiza na lista de
cursos.
● deletarCurso: recebe o id por parâmetro e remove o curso selecionado da lista.
● listaCursos: imprime todos os cursos.*/

function criarCurso(){
    const id = readline.question("Digite o id do curso:");
    const titulo = readline.question("Digite o titulo do curso:");
    const descricao = readline.question("Digite o descricao do curso:");
    const imagem = readline.question("Digite a url da imagem do curso:");
    const nome_professor = readline.question("Digite o nome do professor do curso:");
    const lista_aulas = readline.question("Digite o link para as aulas do curso:");
    cursos.push({id, titulo, descricao, imagem, nome_professor, lista_aulas});
}

criarCurso();

function exibirCurso(){
    console.log('Essas são os cursos disponíveis:');
    // Pegando cada titulo dos objetos
    cursos.map(curso =>console.log(curso.titulo));

    const entradaCurso = readline.question('Qual curso voce escolhe?');

    //Retornando de acordo com o curso escolhida:
    const retorno = cursos.filter(curso => curso.titulo === entradaCurso);
    console.table(retorno);
}

function listaCursos (){
    console.log('Esses são todos os cursos disponíveis:');
    console.table(cursos);
}

exibirCurso ();
listaCursos();