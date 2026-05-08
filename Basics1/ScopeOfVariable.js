
if(true){
    let a=10;
const b=20;
var c=30;
}
/* console.log(a); */ //give undefined locally scope

/* console.log(b); */ //give undefined locally scope

console.log(c);//globally scoped -->easily give the value
//-----------------------------------------------------------------------------
let a1=300;
{
    //locally scope
   let a1=50
    console.log(a1);//locally scope
}
console.log(a1);//globally scope

//imp -->scope in browser and in node js run enviornment is totally different