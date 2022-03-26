function somaNumeros(array){
    if( !array || !array.length) return;
    const SOMA = array.reduce((prev, current) => prev + current);

    return SOMA;
}


console.log(somaNumeros([1, 2, 3, 80]));