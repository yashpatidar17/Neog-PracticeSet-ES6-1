//Write a function that takes two numbers as input and determines which one is greater.


const checkNum = (a) => {
  if (a < 0) {
    return "negative number"
  } else {
    return "positive number"
  }
}

console.log(checkNum(9)) // Positive Number
console.log(checkNum(-8)) // Negative Number
console.log(checkNum(22)) // Positive Number