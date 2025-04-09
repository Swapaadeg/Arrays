let fruits = ['apple', 'orange', 'banana', 'orange', 'cherry', 'orange', 'orange']

function countOranges(arr, Oranges) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === Oranges) {
        count++;
      }
    }
    return count;
  }
  console.log(countOranges(fruits, 'orange'))