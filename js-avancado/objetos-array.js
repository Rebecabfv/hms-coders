//Um array de objetos
const filmes = [
    {
        id: 1,
        titulo: "Dilema das redes",
        descricao: "Documentário",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Filme",
        duracao: 120
    },
    {
        id: 3,
        titulo: "Corra",
        descricao: "Suspense",
        duracao: 120
    }
]

//Desestruturando o objeto
const {id, titulo, descricao, duracao} = filmes;

// Pegando cada titulo dos objetos
filmes.map(filme =>console.log(filme.titulo));

