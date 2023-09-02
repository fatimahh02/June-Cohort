// document.body
// document.head
const body = document.body;
const head = document.head;

body.style.backgroundColor ="pink"
//creating an elemnt 
 const title = document.createElement("title")
 title.innerHTML ="DOMS LESSON 1"

 console.log(title)
 head.append(title);


 //..queryselecter..................

 const pageHeading = document.getElementById("heading")
 pageHeading.innerText ="Tuesday"

 //querySelecter
 //querySelecterAll
 //getElementById
 //getElementByClassName
 //getElementByTagName

//1
const para = document.createElement("p")
para.innerText ="this is part of the paragraph tag"
body.append(para)

//2
const firstHeading = document.querySelector("h1")
firstHeading.style.color = "red"

//3
const container = document.createElement("div")
container.style.width ="200px"
container.style.height ="200px"
container.style.backgroundColor ="white"
container.style.border ="1px"
container.style.borderBlock = "solid"
container.style.borderColor = "blue"

body.append(container)

//4
firstHeading.innerText="this will be updated"