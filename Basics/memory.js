//stack vs heap
  //stack memory uses in --->primitive Datatypes
  //Heap Memory uses in ---->Non primitive datatypes

  let mychannelname="rohit124142021.com"//primituve datatype stored in stack memory
  let anothername=mychannelname;
  anothername="rohit"
  console.log(mychannelname)
  console.log(anothername);
  //---------------------------------------------------------
  let userone={
    email:"user@google.com",
    upi:"user@ybl"
  }
  let usertwo=userone;
  usertwo.email="rohit@google.com";
  console.log(userone.email);//it means  both have reference to the same memory so in heap memory the change in email done in both the objects email
  console.log(usertwo.email);
  //both give "rohit@google.com"