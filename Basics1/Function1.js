function calculateCartPrice(...num1){//rest operator here used
    return num1
}
//when more than one value need to print
console.log(calculateCartPrice(200,400,500,2000));/* ..done with the help of spread/rest operator */
const user={
    username:"rohit",
    price:199
}
//pass object into fncn.....................
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)

//-----------------------------------
//pass array into the fncn
const mynewArray=[200,100,2,223];
function returnsecondvalue(getarray){
    return getarray[1];
}
console.log(returnsecondvalue(mynewArray));