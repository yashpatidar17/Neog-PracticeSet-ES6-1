//Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen =  (num) =>{
  if(num >1 && num <10){
    return "Number is between 1 and 10"
  }else{
    return "Number is not between 1 and 10"
  }
}

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(101)); // false