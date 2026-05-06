const name="rohit"
const surname="yadav"
const age=18
console.log(name+surname);//string conctnate after adding + sign
//-------------------------------------------------------------------------------
//MODERN WAY

console.log(`Hello my name is ${name} and my surname is ${surname} and my age is ${age}`);//$ sign indicate the variable value injected and backtics used to show the string

//another way to declare a string
const gameName=new String('rohit bb')//here key value pair made
//eg below
console.log(gameName[0]);// r is the output
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());//convert the string inti the uppercase
console.log(gameName.charAt(2));//tell the chracter at index 2
console.log(gameName.indexOf('h'));//tell the index of h
// substrring formation from the string
const newstr=gameName.substring(0,4);
console.log(newstr);
const newStringOne="     rohit    ";
console.log(newStringOne);
console.log(newStringOne.trim());//it trim the white spaces and escaped chracters

const url="https://hitesh.com/hitesh%20chaudhary"

//ohh my url gonna be wrong how to replace in bw word and correct it
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'))
console.log(url.length)//tell the length of the string

//split fncn in the string

console.log(gameName.split('-'));