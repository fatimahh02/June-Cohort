//objects variable holds other variables aswell form of a function.
//no object is the exact same unless they are the same type like a car 
//its a brace /can odify /can add properties
//key and value 
//objects hold details or produts
//objects can hold arrays variable function
//dot notation = if you want to call on something specific in an object you can do for example below console.log(car.name) or .make oe .colour)
//to delete you can use delete car.type

// const car ={
//     key:value
// }


const car ={ name:"bmw", colour:"black",make:2015 ,type:["1 series","m sport"]}
delete car.name  //deleting
car.colour="white" //updating
car.owner="john" //adding
console.log(car)



const item={
    img:"set",
    title:"title of product",
    price:"price of product"
}

//CONSTRUCTOR
//use this. in a function

// const person= {
//     firstname: "john",
//     lastname:"smith",
//     age:45,
//     fullname: function(){
//         return this.firstname+" "+this.lastname
//     }
// }

// console.log(person.fullname())

//or you coud make a framework and add what you want so you dont need to code the same things 

function person(name,lastName,age,gender){
    this.firstName = name
    this.lastName = lastName
    this.age = age
    this.fullName = function(){
        return this.firstName+" "+this.lastName
    }

    if(gender){
        this.gender =gender
    }else{
        this.gender ="male"
    }
}

const john = new person ("john","smith",45)
const Fatimah =new person("Fatimah","Isakji", 21,"female")

console.log(john)
console.log(Fatimah)