const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let fruits = ['apple', 'orange', 'banana', 'orange', 'cherry', 'orange', 'orange']

function mergeArrays(arr1, arr2) {
    return[...arr1, ...arr2]
}
console.log(mergeArrays(numbers, fruits))