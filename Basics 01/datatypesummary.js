//primitive datatypes
// 7 types :string ,Number,Boolean,null,undefined,symbol,bigInt

//----------------------------------------------------------------

//Reference Datatypes (NON primitive)
//Array,Objects,Functions

const score=100//i never defined that is it is which type of  datatype so it is dynamic in nature
//eg const score=false

let userEmail;
let isLoggedIn=false
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const bigNumber=12345676543234567654345676n//to stor the big numbers
const heroes=["shaktiman","naagraj","doga"]//array

let myObj={
    name:"rohit",//here object is defined
    age:21,
}

const myFunction=function(){
   console.log("Hello World");  //here in js fncn treat as variable
}

//how to check type of datatypes--> typeof fncn
console.log(typeof(myObj));
console.log(typeof(myFunction));
console.log(typeof(anotherId));