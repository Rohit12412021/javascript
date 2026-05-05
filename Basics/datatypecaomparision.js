console.log(1<3);//true
console.log(2>=1);//true
console.log(2==1);//false
console.log("2">1);//different datatypes comparision it is not allowed in typescript
console.log(null==0);//false//here null convert into the number so give false
console.log(null>=0);//true//in this comparision scenario null convert into the zero
console.log(undefined==0);//undefined give false
console.log(undefined>=0);//undefined always give false

// === strict check very important it compare number and also datatype bw two numbers
console.log(2===2);//true both true both integer and also datatype is same
console.log("2"===2);//here number same but datatype different give false