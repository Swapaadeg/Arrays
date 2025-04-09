const numbers = [3, 2, 10, 22, 7, 9, 45, 8, 13, 10]
const numbers1 = [1, 2, 3, 4, 5, 6, 7]

function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] < arr[i - 1]) {
        return false
    } 
}
    return true
}

console.log(isSorted(numbers1))

//isSortedDescending pour l'ordre décroissant