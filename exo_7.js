let sentence = "I Love Programming"

function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
  }
  console.log(reverseWords(sentence));