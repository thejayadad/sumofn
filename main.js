
// JavaScript function to calculate the sum of n 0 to the number

// function sumofN(n){
//     let result = (n * (n +1)) /2;
//     return result
// }

// console.log(sumofN(7))
// console.log(sumofN(4))

function sum(array, finish = false){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        if(finish){
            console.log(total + " + " + array[i] + " = " + (total + array[i]));
        }
        total += array[i]
    }
    return total
}

console.log(sum([3,4,5,6], true))