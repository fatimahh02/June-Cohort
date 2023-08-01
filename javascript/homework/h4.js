//Write a conditional statement that takes into consideration validations (i.e case sensitivity). 

let month="JULY".toLowerCase()


if(month="july"){
console.log(`${month} is a month`)
}else{
    console.log(errror)
}

//Write a conditional statement that prints whether the phone being used is an Iphone or an android

let phone="iphone"

if(phone="iphone" || phone=="iphone3g" || phone=="iphone3gs" || phone=="iphone4" || phone=="iphone4s"|| phone=="iphone5"|| phone=="iphone5c"|| phone=="iphone5s"|| phone=="iphone6"|| phone=="iphone6plus"|| phone=="iphone6s"|| phone=="iphone6splus"|| phone=="iPhone SE"|| phone=="iPhone 7"|| phone=="iPhone 7 Plus"|| phone=="iPhone 8"|| phone=="iphone8 plus"|| phone=="iPhone X"|| phone=="iPhone XR"|| phone=="iPhone XS"|| phone=="iPhone 11" || phone=="iPhone 11 Pro" || phone=="iPhone 11 Pro Max" || phone=="iPhone 12 mini"|| phone=="iPhone 12" || phone== "iPhone 12 Pro" || phone=="iPhone 12 Pro Max"|| phone=="iPhone 13 mini"|| phone=="iPhone 13"|| phone=="Phone 13 Pro"|| phone=="iPhone 13 Pro Max"|| phone=="iPhone 14"|| phone=="iPhone 14 Plus"|| phone=="iPhone 14 Pro"|| phone=="iPhone 14 Pro Max"){
    console.log(`${phone} is an iphone`)
}else if(phone=="android"){
    console.log("android")
} else{
    console.log("error")
}   

//Write a switch case that checks if the operation is a math operation (+,-,*,/) 

var operation="="
var no1 =250
var  no2= 10

switch(operation){
    case"+":
    console.log(no1+ no2)
    break
    case"-":
    console.log(no1-no2)
    break
    case"*":
    console.log(no1*no2)
    break
    case"/":
    console.log(no1/no2)
    break
    default:
        console.log("not recognised")
}




	
	
	
	
	
	

