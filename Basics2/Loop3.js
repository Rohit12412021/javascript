//for Each not written any value
const coding=["js","ruby","java"]
const values=coding.forEach((item)=>{
    console.log(item);
    return item;//give undefined
})
console.log(values);
//----------------------------------------------------
//filter--?it return the value where forEach failed to return the value
const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums.filter((nums)=>nums>4);//()-->this type of bracket already return include auttomaticlally if i use {} tha i return manually

console.log(newNums);
//with the help of forEach loop
const arr=[]
myNums.forEach((item)=>{
    if(item>4){
               arr.push(item);
    }

})
console.log(arr)
//----------------------------------------------------------------------
//Map intro
const arr1=[1,2,3,4,5,6,7,8,9];
//add 10 to each-->use map
const ans=arr1.map((num)=>num+10);
console.log(ans)
//chaining of map
const arr2=arr1.map((num)=>num*10).map((num)=>num+1)
console.log(arr2)
//-----------------------------------------------------------------------
//Reduce
const arr3=[1,2,3,4]
const intialvalue=0;
const sum=arr3.reduce(function(acc,currval){
    console.log(`acc:${acc}`);
    console.log(`currval:${currval}`)
    return acc+currval;
},0)//it accumulator indicate starting from 0
console.log(sum);//1+2+3+4=>10

//application--->use to find the bill in shopping app
//---------------------------------------------------------------------
