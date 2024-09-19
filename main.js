let pessoa = {
    nome: 'Jhon',
    idade: '20',
    cidade: 'Curitiba'
}

function saudacao (pessoa) {
    return `Olá, ${pessoa.nome} você tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`
}

console.log(saudacao(pessoa))

let aluno ={
    nome:'Alicia',
    idade:10,
    curso: 'Arte'
}

function alunoDescricao (aluno) {
    return`Olá, como você está ${aluno.nome}?, sua idade atual é ${aluno.idade} anos e você está matrículado em ${aluno.curso}, Parabéns!!!`
}

console.log(alunoDescricao(aluno))

const numeros = (num1, num2) => num1 + num2
return num1 + num2

console.log (numero(2, 2))