//Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).

  var hero ="superman"

  if(hero==="superman"){
  console.log(`${hero} is a DC character`)
  }else if(hero==="spiderman"){
      console.log(`${hero} is a Marvel character`)
 }else{
     console.log("error")
  }

//write a conditional statement taking age as variable and what year group they will be in a school 

  let age=17
  if(age>=11 && age <16){
      console.log("secondary education")
  }else if (age>=16 && age<18){
      console.log("college")
  }else if (age>=18){
      console.log("optional education")
  }else{
    console.log ("error")
  }

//Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. if above 5 print out error and if less than 5 print out error. 

 let array =["bread","milk","eggs","butter","jam"]

  if(array.length>5 || array.length<5){
     console.log("ERROR")
  }else{
    console.log("array is 5")
 }


