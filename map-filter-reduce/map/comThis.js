const MANGA = {
    value: 2,
} 

const BATATA = {
    value: 90,
} 

function mapComThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg)
}

const NUMS = [1, 2];

console.log('this => MANGA', mapComThis(NUMS, MANGA));
console.log('this => BATATA', mapComThis(NUMS, BATATA));