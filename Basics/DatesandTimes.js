//javascript date reference to the january 1 1970
//dates
let myDate=new Date()
console.log(myDate);//unable to unnderstand

console.log(myDate.toString());//some understandable
console.log(myDate.toLocaleTimeString());//tell time but not of 24 hr format
console.log(myDate.toDateString())//tell date only
console.log(myDate.toTimeString())//tell time only of 24 hr format
//------------------------
console.log(typeof(myDate))//yahhh it is a object

//set below a specific date see how?
let myCreatedDate=new Date(2023,0,23)//here in javascript month start from 0 means january
console.log(myCreatedDate.toDateString())

//with time how to create date---->see below
let myCreatedDate1=new Date(2013,2,14,5,30)
console.log(myCreatedDate1.toLocaleDateString())
console.log(myCreatedDate1.toTimeString())

//another way to declared the date--->here the month start from index 1
let myCreatedDate2=new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleDateString())

//Time Stamps......
let myTimeStamp=Date.now()//it is give correct now time in millisecond with thyye help of this we can compare to user acc to time eg in quiz app which solve all question first by comparing time it is so fast and precise
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

//Convert Time into Second
console.log(Math.floor(Date.now()/1000))

// only construct some thing from the date not all thing like day from date month from the date
let newDate=new Date()
console.log(newDate.getDay())//tell the current day
console.log(newDate.getMonth()+1)//tell the current month

newDate.toLocaleString('default',{
    weekday:"long",
    day:"String"
})
console.log(newDate.getDay())