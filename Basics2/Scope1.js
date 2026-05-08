function one(){
    const username="hitesh"
    function name(params) {
        
    } 
    function two(){
        const website="instagram"
        console.log(username)//yes executed because username is globally defines wrt to this fncn
    }
   /*  console.log(website) */  //-->give error because it is locally defined its scope is not exist there its over earlier in fncn
    two()

}
/* console.log(Username) */   //----> it also give error because username scope is only in fncn one not exiat outside the fncn 1
one();
//+++++++++++++++++++++++++++++++++++++-->interesting<--++++++++++++++++++++++++++++++++++
console.log(addone(5));//it give correct op wheather it is difined later
function addone(value){
    return value+1;
}
addone(5);//here return not print


/* console.log(addtwo(5)) *///--->give error because here fncn defined in different way rather than earlier one
const addtwo=function(value){
return value+2;
}