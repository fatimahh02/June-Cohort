const body = document.body;
const head = document.head;
body.style.backgroundColor ="coral";

const title =document.getElementById("title")
title.innerText="Homework 1 is all about DOMs"

let updateName = document.getElementById('dom')
updateName.innerText= "my name is fatimah"


const dateHolder =document.querySelector("h3")
const date = new Date()
dateHolder.innerText = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`
  
const h4 = document.createElement("h4")
h4.innerText="Coding languages I am currently learning"

const orderedList=document.createElement("ol")
const listItem1=document.createElement("li")
const listItem2=document.createElement("li")
const listItem3=document.createElement("li")

orderedList.append(h4)
listItem1.innerText="HTML"
orderedList.append(listItem1)
listItem2.innerText="CSS"
orderedList.append(listItem2)
listItem3.innerText="JS"
orderedList.append(listItem3)

body.append(orderedList)

const button =document.createElement("button")
 button.innerText="click me"
 body.append(button)


 