const user={
    username:"rohit",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)//this is used to denote a current context
          console.log(this);
    }
}
user.welcomeMessage();
user.username="gourav";
user.welcomeMessage();
//---------------------------------------------------------------------------
console.log(this)//here the op is {} becuase current context is node enviornment


function chai(){
    let username="rohit"
    console.log(this.username)//undefined becuase this is only defined in the object not in the function 
    console.log(this);//give some values like fetch performance 
}
chai()

//--------------------------------------------------------------------------------
//arrow fncn
const arrowFnxn=()=>{
    let username="rohit";
    console.log(this)
}
arrowFnxn()

//imp --->difference bw fnxn and arrow fncn is one that in regular fncn we can use this and get its value but in arrow fncn it gives us undefined
 const addTwo=(num1,num2)=>{
  return num1+num2;//another way is implicit defined not write return just use ()--->(num1+num2)
 } 
 console.log(addTwo(5,3));
 