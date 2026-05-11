//JAVA SCRIPT EXECUTION CONTEXT
//1->Global EC-->always occur-->(this) is used to store the execution here
//2->FUNCTION EC
//3 Eval Execution Context

//1st phase -->memory creation phase->memory created for all fncn variable etc
//2nd phase-->execution phase-->execution take place 
//-------------------------------------------------------------
//example
let val1=10;
let val2=5;
function addNum(num1,num2){
    let total =num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(3,5)
//val1->undefined
//val2->undefined
//addnum->defination pass //cycle 1-->memory creation phase
//result1->undefined
//result2->undefined
//---------------
//val1=10
//val2=5               //execution phase-->(execution take place)
//addNum->new variable enviornment+execution thread-->same two phase occur for it below explained
//addNUM (memory creation phase)-->val1->undefined val2->undefined total->undefined
//addNum(execution phase)-->val1=10 val2=5 total=8
//execution pahase continue after addnum fncn
//result1=15-->execution take place
//result2-->new variable enviornment+execution thread is formed again-->BELOW
//num1=undefined num2=undefined total->undefined(memory created)
//num1=3 num2=5 total=8 -->execution take place 
//----------------------------------------------------------------------------------
//call stack()-->calls are managed in the form of stack to show actual execution of call-->LIFO
function rohit(){
    gourav();
    console.log(`hello rohit`);
    
    function gourav(){
        console.log('hello gourav')//acc to call stack lifo -->firstlt gourav fncn call than rohit using lifo mechanism
    }
}
rohit();

