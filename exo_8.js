const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterEven(arr) {
    return arr.filter(function(numbers) {
        return numbers %2 === 0   
    })
}
console.log(filterEven(numbers))