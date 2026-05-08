//how to declare object in constructor form
const tinderUser=new Object()
tinderUser.name="rohit"
tinderUser.age=18
console.log(tinderUser.name)  //Access
console.log(tinderUser.age)
//--------------------------------------------------------------
//Object inside the Object
const regularUser={
    email:"somegmail@gmail.com",
    fullname:{
    startingname:"rohit",
    LastName:"Yadav"
    },
    isLoggedin:false
}
//access
console.log(regularUser.fullname.LastName) //we can access the object inside the object in this way
//-------------------------------------------
//merging two object
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)
//now merge with the spread method
const obj4={...obj1,...obj2};
console.log(obj4);
//-----------------------------------------------
console.log(tinderUser)
//access keys from the tinder user by the help of imp fnxn
console.log(Object.keys(tinderUser))
////access val from the tinder user by the help of imp fnxn
console.log(Object.values(tinderUser))
//convert keys value pair into the form of array
console.log(Object.entries(tinderUser))
//check whether the following property available in the object or not
console.log(tinderUser.hasOwnProperty('isLogged'))