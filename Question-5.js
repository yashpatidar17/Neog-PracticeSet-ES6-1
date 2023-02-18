//Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlphabetA = (str)=>{
    if(str.includes("a","A")){
        return "include a or A"
    }else{
        return "does not include a or A"
    }
  }

console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Jane")) // Includes a 