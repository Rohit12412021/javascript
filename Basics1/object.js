//Singleton--->here object is contructed by constructor mehod-->constructor method (object.create)

//Object Literals below

const User={
    name:"Rohit",//also we can pass key eg 0 :"rohit"
    age:18,
    location:"rewari",
    isLoggedin:false,
    email:"rohit@123",
    lastLogin:["Monday","Wednesday"]
}

//access
console.log(User.email);
//another way to access
console.log(User["email"])

// eg where dot method of access is failed
const user1={
    "fullname":"Gourav"
}
console.log(user1.fullname)//fail here dot method
console.log(user1["fullname"])
//how symbol can be used in the object
const mySym=Symbol("key1");
const user2={
    name:"rohit",
    [mySym]:"key1"
}
console.log(user2[mySym])
console.log(user2)
User.email="rohit3321.com"
//Object.freeze(User)//it freezee the object no change take place at next
User.email="rohit8494.com"
//access to check whether there is any change after using freeze
console.log(User.email)
console.log(User)
//-------------------------------------------
User.greeting=function(){
    console.log("hello good morning")//here i make the fncn in the user object
}
console.log(User.greeting())
//-----------------------------------------------
User.greeting2=function(){
    console.log(`helloo good morning,${this.name}`);//string interpolation with the help of the backtick
    //this->here (this) indiacte all the current value in the object
}
console.log(User.greeting2())
