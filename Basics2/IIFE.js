//IIFE-->immediately invoked function expression
function db(){
    console.log(`DB Connected`);
                                   //case 1
     //here some time the fncn are polluted  by global scope so we use IIFE so that it is immediately invoked                               
}
db();
//--------------------------------------------------------------

(function chai(){
    console.log(`DB Connected`);//()-->used to define scope  and another ()-->is used to execute the fncn
})();//semi colon is imp here
//using arrow function 

( (name)=>{
    console.log(`Db Connected ${name}`);
})('rohit');
