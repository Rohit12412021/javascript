//always follow camel case in variable name in js
const a=7
let b=7
var c=3
//a=9    cant update const variable
b=9   // let variable can update
//let b=10 cant redeclare let variables
var c=9 //can be redeclared and update

console.table({a,b,c})