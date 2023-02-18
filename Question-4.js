//Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd = (a) =>{
  if(a%2 === 0){
    return "Number is Even"
  }else{
    return "Number is odd"
  }
}

console.log(isEvenOdd(5)) // Odd Number
console.log(isEvenOdd(8)) // Even Number
console.log(isEvenOdd(10)) // Even Number