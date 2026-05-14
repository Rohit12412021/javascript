//selector in the dom-->

//select by id-->id="rohit"
const el=document.getElementById("rohit") 

//select by className-->class="rohit"
const el1=document.getElementsByClassName("rohit") 

//select by name
//example
const el2=document.getElementsByName(heading)

//all in one
const el3=document.querySelectorAll('x')//x->.x-->if class x and #x->if x is id

//different methods
document.getElementById("rohit").setAttribute("mohit")
document.getElementById("rohit").style.backgroundColor='green'//select elelemnt and change its bg color to green
//how to add content and access content
title.textContent//show all content wheather we hide some by style property it also shows them
title.innerHTML//it show all the content including html tag inside a particular content
title.innerText//show the inner text only if some part is hide to add style it not show that

//difference bw queryselector vs queryselectorAll
//queryselctor-->select particular single element
//querySelectorall-->give NOdelist of all element with particular type

//after select all element u can apply operation on different element by write there nodelist index eg NodeList[0].style.color='green'
//how to apply operation on all the el of nodelist-->
NodeList.array.forEach((item) => {
    item.style.color="green";//all nodeelement bears this changes
});
//if we use-->getelementbyclass-->it give the elements not in nodelist give in html collection unable to use foreach loop how?
//convert into array->Array.from(HtmlCollection)//htmlCollection is name of the list obtained 