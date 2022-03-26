const REPETIDOS = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    let meuSet = new Set(array);

    return [...meuSet];
}

console.log(valoresUnicos(REPETIDOS));