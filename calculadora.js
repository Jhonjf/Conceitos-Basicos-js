function calculadora (num1, num2, operacao) {
    if (operacao === '+'){
    return num1 + num2;
    }else if (operacao === '-') {
    return num1 - num2;
    } else if (operacao === '*') {
        return num1 * num2;
    } else if (operacao === '/') {
        return num1 / num2
    } else {
        return 'Operação Inválida';
    }
}

console.log(calculadora(5, 10, '+'));
console.log(calculadora(10, 2, '-'));
console.log(calculadora(1, 9, '*'));
console.log(calculadora(10, 2, '/'));
console.log(calculadora(0, 0, '*'));

