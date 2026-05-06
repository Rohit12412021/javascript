const marvelHeroes=["thor","ironmen","spidermen"]
const dc=["superman","flash","batman"]
//---------------------------------------------
marvelHeroes.push(dc);//it not merge both but push a array into the last index of another array
console.log(marvelHeroes);
  //get the flash
  console.log(marvelHeroes[3][1]);//op flash

//concat two arrays 
const arr1=["a","b","c"];
const arr2=["d","e","f"];
const arr3=arr1.concat(arr2);
console.log(arr3);
//----------------------------------------------
//merge by spread operator
const arr4=[...arr1, ...arr2];//glass drop and spread and togehter and combine think like that
console.log(arr4);
//----------------------------------------------
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realanotherArray=anotherArray.flat(Infinity);//it removes all the depth present int he array and the complex array of array of array convert into the flat array
console.log(anotherArray);
console.log(realanotherArray);
console.log(Array.from("Rohit"))//made the array from the string
let score1=100;
let score2=200;
let score3=100;
console.log(Array.of(score1,score2,score3));