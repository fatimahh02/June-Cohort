//From you understanding of array create an array with 15 items inside
let array = ["bread", "milk", "cheese", "eggs","coffee","apple","banana","carrot","cucumber","mango","juice","oranges","rice","popcorn","cream"]

//From the array just created in the above question remove the last item in the array. You cannot alter the original array.
array.pop()

//Add an item to the end of the list. Cannot alter the original array
array.push("strawberries")

//Find the position of the first item, middle item and last item of the list and print them off separately.
console.log(array[0])
console.log(array[7])
console.log(array[14])

//Modify 3 items in the array and print them off
array[0]="zero"
array[1]="one"
array[2]="two"

//Using string interpolation combine 5 different variables together
let one="hi"
let two=" this"
let three=" is"
let four=" string"
let five=" interpolation"
console.log(`${one} ${two}${three}${four}${five}`)

//Delete the 2 items in the array
array.pop()
array.pop()
//remove the first item from the array
array.shift()

//add an item to the first position of the array
array.unshift("lettuce")
console.log(array)