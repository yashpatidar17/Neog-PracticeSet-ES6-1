//Write a function that takes a number as input and determines if it is a multiple of 3.

const isMultipleOfThree = (num) =>{
  if(num % 3 === 0){
    return "num is multiple of 3"
  }else{
    return "num is not multiple of 3"
  }
}

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true