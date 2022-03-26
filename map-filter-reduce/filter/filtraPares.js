function filtraPares(array){
    if (!array || !array.length) return;

    const FILTERED_ARRAY = array.filter((item) => item % 2 === 0);

    return FILTERED_ARRAY;
}

console.log(filtraPares([1, 35, 42, 57, 500, 1250, 2587]));