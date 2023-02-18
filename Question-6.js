//Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (str)=>{
  if(str.length < 5){
    return "less than 5 character"
  }else{
    return "more than 5 character"
  }
}

console.log(checkLength("Programming")) // more than 5 characters 
console.log(checkLength("Jeep")) // less than 5 characters 