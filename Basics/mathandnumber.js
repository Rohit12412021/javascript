const score=400

const balance=new Number(100)
console.log(score)
console.log(balance);//op is Number:100 tell it is number

console.log(balance.toString());//op mis still 100 but its type is now become string
console.log(typeof(balance.toString()));//so it shows string noe
//if it is string so its our benefit we can check its length easily
console.log(balance.toString().length);

console.log(balance.toFixed(2))//it is precise upto 2 places after decimal usedd in gst apps etc

console.log(balance.toPrecision(3));//it precise the number and total number should be 3
const hundered=1000000000
console.log(hundered.toLocaleString('en-IN'))//commas placed to 0s acc to india system its by default a usa system
//min value in js--> Number.MIN_VALUE and similarly max value is Number.MAX_VALUE

let x=Number.MIN_VALUE;
let y=Number.MAX_VALUE;
console.log(x);
console.log(y);
//----------------------------MATHS-------------------------------------
console.log(Math);//object store all the property of the math
console.log(Math.abs(-1.5));//it gives absolute value
console.log(Math.round(4.67));//it round off the decimal values
console.log(Math.ceil(4.3))//round to top value
console.log(Math.floor(4.8))
console.log(Math.sqrt(26));
//get random number Math.random();-->it always give number bw 0 to 1
//random no. in bw any range

console.log(Math.random());//bw 0 and 1
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);