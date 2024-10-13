let aluno ={
    nome:'Alicia',
    idade:10,
    curso: 'Arte'
}

function alunoDescricao (aluno) {
    return`Olá, como você está ${aluno.nome}?, sua idade atual é ${aluno.idade} anos e você está matrículado em ${aluno.curso}, Parabéns!!!`
}

console.log(alunoDescricao(aluno))
