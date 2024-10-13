let pessoa = {
    nome: 'Jhon',
    idade: '20',
    cidade: 'Curitiba'
}

function saudacao (pessoa) {
    return `Olá, ${pessoa.nome} você tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`
}

console.log(saudacao(pessoa))
