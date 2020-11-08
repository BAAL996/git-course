console.log('Hello World!')
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
for (let a in arrayNumbers){
    console.log(a);

}

const sum = (arr) =>{
    let sum = 0
    for (let a in arr){
        sum += a;
    }
    return sum;
}
console.log(sum(arrayNumbers))