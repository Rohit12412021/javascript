//if
if(true){
    //condtion true h toh jayenge condition ke andar
}
if(false){
    //conditon false h toh jayenge condition ke andar
}
//---------------------------------------------
const isUserLoggedin=true;
if(isUserLoggedin){                                //eg of conitional statement
    console.log(`hii you are welcome`)
}
//----------------------------------------------
//assignment operator like <,>,<=,==<===
//another eg
if(2==="2"){
    console.log("executed")
}
else{
    console.log("NOT Executed")
}
//----------------------------------------------
//!x-->indicate negative/negation of x
const temperature=44
if(temperature<50){
    console.log("less than 50")
}
else{
    console.log("greater than equal to 50")
}
//------------------------------------------------
//shorthand notation
const balance=1000
if(balance>500) console.log("test"),console.log("test2");//bad practice
//------------------------------------------------
//two or more than two condition
if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750")

}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}
//--------------------------------------------------
const userLoggedIn=true
const debitCard=true
if(userLoggedIn&&debitCard){//dono statement true honi chaiye agar ek bhi false toh condition nhi chlegi
    console.log("allow to buy course")
}
//--------------------------------------------------
//1 and 7 are lucky number
let x=1;
if (x==1||x==7) {//koi ek bhi true toh condition chlegi
    console.log("you are lucky")
}
//----------------------------------------------------
//switch case statement
const month=3;
 switch(month){
    case 1:
        console.log("january");
        break;
        case 2:
            console.log("february");
            break;
            case 3:
                console.log("march");
                break;
                default:
                    console.log("undefined");
                    break;
 }
 //------------------------------------------------------
 const userEmail="rohit@123"
 if(userEmail){
    console.log("Got user Email")   //imaginary false true-->here useremail exist so this staemnet is run 

 }
 else{
    console.log("dont have user email")
 }
 //falsy values--> 0,-0,BigInt,"",null,undefined,nan,false
 //truthy values -->all values except above --> 1,number,"0","false"-->string size not equal to 0 give true
 //--------------------------------------------------------
 const userEmaill=[];
 if(userEmaill.length===0) console.log("array is empty");
 //check of empty object
 const emptyObject={};
 if(Object.keys(emptyObject).length===0){//Object.keys(emptyObject) become array with no key values->empty
    console.log("empty object")
 }
 ///////////////////////////////////////////////////////////
 //nullish coalescing operator (??):null undefines
 let val1;
 val1=5??10//agar 5 na hota ya null hota toh 1-0nassign ho jata
 console.log(val1)
 //----------------------------------------------------
 let val2;
  val2=null??10;
 console.log(val2);
 //------------------------------------------------
 //..terniary operator..
 //conditon?true:false
let x1=9;
const y=(x1==8)?9:10; //if x==8 tan y set to 9 otherwise it set to 10
console.log(y);
//-------------------------------------------------

