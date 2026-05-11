//while loop 
let index=0;
while(index<=10){//iterate until index <=10
    console.log(`value of index is ${index}`);
    index+=2;
}
//while loop on array
let myArray=["shaktiman","ironmen","superman","wanda"];
let arr=0
while(arr<myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr++;
}
//do-while loop on array
let score=1;
do{
    console.log(`Score is ${score}`);
    score++;//increment
}
while(score<=10);//-->condition
//----------------------------------------------------------------------------------
//do while loop ->imp -->1 baar toh jarur execute hoga -->pehle execute than condition check
let s=1;
do{
    console.log(s);
    s++;
}
while(s<=0);//op is 1
