//FOR OF LOOP DEMONSTRATION

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5];
/* for(const iterator of object){//object matlab kispe loop lgana h
    
}
 */
for(const num of arr){
    console.log(num);
}
const r="hello Words !!!"
//for of on string
for(num of r){
    console.log(num);
}
//Maps
const map=new Map()
map.set('IN',"INDIA");
map.set('usa',"unites states of america")
map.set('IN',"INDIA")
console.log(map);
for(const [key,value] of map){
    console.log (key,"-->",value);
}
//---------------------------------------
//for loop on object---->use forin loop
const myObject={
    game1:'nfs',
    game2:'spiderman'
}
for(key in myObject){
    console.log(key)//keys are accessed
}
for(key in myObject){
    console.log(myObject[key])//values of keys are accessed
}
//can forin loop used in array-->it give index as keys and value are done with the help of key
const programming=["js","rb","py","java","cp"]
for(const key in programming){
    console.log(key)//keys-->1 2 3 4
    console.log(programming[key])//value
}
  //------------------------------------------------
  //for each loop
  const coding=["c++","ruby","java","python"]
  coding.forEach(function (item){
    console.log(item)
  })//call back means it take a fncn with no name

  coding.forEach((item)=>{
    console.log(item)//arrow function inside inside a fncn
  })
  //make a fncn in different space and pass to the fncn as a callback
  function printme(item){
     console.log(item);
  }
  coding.forEach(printme)
  //-------------------------------------------------------
  coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)//print item index and array
  })
  //-------------------------------------------------------
  const myCoding=[
    {
        languageName:"javascript",
        languagefileName:"js"
    },
    {
        languageName:"python",
        languagefileName:"py"
    }
  ]
  myCoding.forEach((item)=>{//item indicate each object
      console.log(item.languageName);
      
  })
