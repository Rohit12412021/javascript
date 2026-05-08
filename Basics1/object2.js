const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Rohit"
}
//course.courseInstructor -->lengthy and boring
//alternative way-->destruct the object
const {courseInstructor}=course
console.log(courseInstructor);
const{courseInstructor:r}=course//alternate name provide
console.log(r)
//-------------------------------
//API INTRO
//api-->apna kaam kisi se krva rhe h aisa smjho
//in earlier response of api come in xml form which is in a primitive way but now it is comne in json format

//json is basicly the object with no name -->take  it lightly

/* 
 {
   "name" :"Rohit",
    "coursename":"js in hindi", (JSON--FORMAT)
    "price":"free"
 }
     */

 