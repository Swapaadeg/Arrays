let fruits = ['apple', 'orange', 'banana', 'orange', 'cherry', 'orange', 'orange']

function mostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      frequency[item] = (frequency[item] || 0) + 1;
      if (frequency[item] > maxCount) {
        maxCount = frequency[item];
        mostFrequentItem = item;
      }
    }
  
    return mostFrequentItem;
  }
  console.log(mostFrequent(fruits));