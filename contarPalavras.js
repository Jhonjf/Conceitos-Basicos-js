function contaPalavras(frase) {
    const fraseLimpa = frase.trim();

    if (fraseLimpa === '') {
        return 0;
    }

    const palavras = fraseLimpa.split(/\s+/);
    return palavras.length;
}

console.log(contaPalavras('Olá, estou estudando para ser um furuto dev!'));
console.log(contaPalavras('Amo programar'))