function mapSemThis(array){
    return array.map(function(item){
        return item * 3
    })
}

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(mapSemThis(NUMS));