let fruits = ['apple', 'orange', 'banana', 'orange', 'cherry', 'orange', 'orange']

function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(removeDuplicates(fruits))