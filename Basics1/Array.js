//Array
const myArr=[0,1,2,3,4,5]//javascript array is Resizeable
//get any index element
console.log(myArr[0])//get 0 index element
//javascript always do shallow copy -->think stack and heap memory where the changes occur take place in both variable becuase both are same reference to the same memory
const myHero=["shaktiman","chotaaBheem"]

//new way to declared the array
 const myarr1=new Array(1,2,3,4)
 console.log(myarr1[1]);
 //push into the array
 myarr1.push(6);
 console.log(myarr1[4])//get the new element that are pushed before
 //pop--->it is used to pop or delete the last element from the array
 myarr1.pop();
//------------------------------------------------
 //unshift fnxn
myarr1.unshift(9);//it add the element at the head or starting point of the array list
console.log(myarr1);

//shift fncn delete the head val or starting value from the array list
myarr1.shift();
console.log(myarr1);
//-------------------------------------------------

console.log(myarr1.includes(9));//give false becuase not exist
console.log(myarr1.indexOf(3));//tell the index of 3 into the array
//the below fnxn convert array into the string
const newArr=myarr1.join();
console.log(newArr);
console.log(typeof(newArr));
//--------------------------------------------------
//slice ,splice
const myn1=myarr1.slice(1,3);//tell starting from the index 1 and not include the index 3rd upto 2nd index only and very imp not manipulate/change the original string
console.log(myn1);//op should 2,3
console.log(myarr1);
//now splice---> it is same staring from the index 1 and but 3 is include here and most important manipulate/change the original string
const myn2=myarr1.splice(1,3);
console.log(myn2);//op should 2,3,4

//now check in both case which string will change after use slice or splice important
console.log(myarr1);