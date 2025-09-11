//**
// lab5 functuin , object
// sep 11 , 2025
// */

console.log(`nihar patel`)
// EXAMPLE 1
// annonymous function in a variable 
let greet = function(username){
    console.log(`welcome to function ${username}`)
}
//arrow function
let greeting = (username)=>{
    console.log(`gootd afternoon ${username}`)
}

// example 2: default parameters
// randamlt generated a number between 1 and 9
// function will pass the amount of time that the number will be generated 
function rand_number(x){
    for(let n= 1; n <= x; n++){
        let num = Math.ceil(Math.random()*9)
        console.log(`${num}`)
    }
}

// examole 3: spread syntax ... 
numbers = [ 2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log('/n------EXAMPLE 3 :spread-----')
console.log (`${max_number}`)

// creat an object 'car'
const car = {
    type: "fiat",
    model: "500",
    color: "white",

    //method 
    car_description : function(){
        return `car type = ${this.type}, ${this.model}, car color= ${this.color}`
    }
}

// EXAMPLE 5 
// create an object'myMath' that wil calculate the perimeter or the ara of rectangle
const myMath = {
    //method
    perimeter : function(w=0,1=0) {return (2*w)+(2*1)},
    area : function (w=0,1=0){return w*1}
}

// example 6
const cat = {
    //properties
    name: "Mickey",
    color: "black with white spot",
    breet: "unknown",

    //method
    meow: () => {console.log("MEOW MEOW MEOW")}
}

//EXAMPLE 7 
const hen = {
    // properties
    name : "Helen",
    eggCount : 0,
    // method
    layAnEgg : ()=>{eggCount++; return `${this.name} lays an egg`},
    resetEggCount(){
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }

}

//EXAMPLE 8 \\
function yell(message=""){
    try{
        console.log(message.toUppercase().repet(3))
    }
    catch(error){
        console.log(error)
        console.log('please pass a string next time!')
    }
    finally{
        console.log('End the program!')
    }

}
    
// EXERCISE 1


