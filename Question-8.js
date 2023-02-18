//Write a function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = (str)=>{
    if(str.toUpperCase().includes("HELLO")){
      return true;
    }else{
      return false;
    }
  }
  
  console.log(isHelloPresent("Hello World")) // true
  console.log(isHelloPresent("World")) // false