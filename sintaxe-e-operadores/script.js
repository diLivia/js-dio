function comparaNumeros(num1, num2){
    if (!num1 || !num2) return `Defina dois números!`
    const PRIMEIRA_FRASE = criaPrimeiraFrase(num1, num2);
    const SEGUNDA_FRASE = criaSegundaFrase(num1, num2);

    return `${PRIMEIRA_FRASE}. ${SEGUNDA_FRASE}`
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if (num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais`
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultadoDez = 'menor';
    let resultadoVinte = 'menor';
    const COMPARA_DEZ = soma > 10;
    const COMPARA_VINTE = soma > 20;

    if(COMPARA_DEZ){
        resultadoDez = 'maior';
    }

    if(COMPARA_VINTE){
        resultadoVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultadoDez} que 10 e ${resultadoVinte} que 20.`
}

console.log(comparaNumeros(10, 15));
