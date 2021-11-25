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

function listaCursos (){
    console.log('Esses são todos os cursos disponíveis:');
    console.table(cursos);
}

listaCursos();