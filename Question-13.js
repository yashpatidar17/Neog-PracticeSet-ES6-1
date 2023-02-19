//Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

//console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
//changeOccupation(person, 'Product Manager');
//console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console


const person = {
  name:"yash",
  age:24,
  occupation:"support engineer"
}

const {name,age,occupation} = person

const changeOccupation = (person,newOccupation)=>{
  if(newOccupation === null){
    return person
  }else{
    person.occupation = newOccupation;
    return person
  }
}

console.log(person)
changeOccupation(person, 'Manager');
console.log(person)