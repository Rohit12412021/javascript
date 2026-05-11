//for loop
for(let x=1;x<=5;x++){
    console.log(x);//it iterate untial condition true x<=5 and after one iteration x value increased
}
//for (loop+conditional) statement
for(let a=1;a<=10;a++){
    if(a==7){
        console.log("Lucky Number is Present");
        console.log(a);
    }
}
//Nested Loop-->print table
for(let i=0;i<=10;i++){
for(let j=1;j<=10;j++){
    console.log(i+"*"+j+"="+i*j);
}
}
//loop on array
let myArray=["flash","Shaktiman","batman","superman"];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}
//if i not increase i it goes to infinite loop -->condition never fails never stop

//break and continue--->demonstration
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("detected 5");//break is used to stop execution after certain condition
        break;
    }
    console.log(`value of i is ${i}`);
}
//continue--->it is used to skip a paticular iteration
for(let i=0;i<=10;i++){
   if(i==5) continue;//if 5 come skip the iteration
   console.log(i);
}


