
const body =document.body
const btn= document.querySelector("button")

var array =["green","blue","purple","pink","yellow","brown","coral"]

function changeColor(e){
  var generator = Math.floor(Math.random()*array.length)
  console.log(array[generator])
  body.style.backgroundColor =array[generator]
}
btn.addEventListener("click", changeColor)