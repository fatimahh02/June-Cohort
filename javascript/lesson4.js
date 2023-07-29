//nested conditionals
// if(){
//     if(){
      
//     }
// }

//spot the issue
// const age=24
// var occupation="student"

//  if(age>21){
//      console.log("stable income and you qualify")
//  }else if (age>21 && occupation!="student"){
//      console.log("no stable income so you do not qualify")
//  }else{
//      console.log("sorry you are too young")
//}


//score above 90 is a* 80 is a above 70 is b above 60 is c anythinh below is fail
 
var score= 99

console.log(typeof score)
if(typeof score=== "number"){

    if(score>=90){
        console.log("A*")
    }else if(score>=80 && score<90){
        console.log("A")
    }else if(score>=70 && score<80){
        console.log("B")
    }else if(score>=60 && score<70){
        console.log("C")
    }else{
        console.log("FAIL")
    }
}else{
    console.log("error")
}    


//array .includes
 
var array = [1,2,3,4,5]
 if (array.includes(5)){
    console.log("array has 5")
 }