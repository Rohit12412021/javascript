
function saymyName(){
    console.log('R')
console.log('o')     //function created
console.log('h')
console.log('i')
console.log('t')
}

saymyName() //Function call
//-----------------------------------
//fnxn to add two number
function addTwoNumber(number1,number2){
    console.log(number1+number2)
}
addTwoNumber(3,4);//7
addTwoNumber("3",4)//34
addTwoNumber("4",3)//43
//parameter vs argument
//parameter-->value pass during fnxn create
//argument-->value pass when the fnxn is called
//-----------------------------------
const result=addTwoNumber(5,3);
console.log("Result:",result)//error -->undefined
// sort out above problem
function addno(num1,num2){
    let result=num1+num2;
    return result;//alternative return num1+num2
}
const resultt=addno(3,5);
console.log(resultt);
function loginMessage(username){
    if(username===undefined) {//alternative way (!username)
        console.log("please enter a username")
        return;
    }
    
    return `${username} just logged in`
}
console.log(loginMessage());//undefined--->give please neter a username