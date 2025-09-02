console.log("lab 2 by nihar patel")
console.log("\n------- example 1 : array------")
// create and intitilize an array 
let fruits = ["apple","orange","graps", "kiwi", "pineapple", "blueberries"]
console.log(`The 3rd fruit = ${fruits[2]}`)
console.log (`there is/are ${fruits.length} fruit/s in the list`)
// remove the 1st element in array fruits using method 'shift()'

fruits.shift()
console.log(`Remove the 1st element in array fruits = ${fruits}`)
// add elements to array
fruits.unshift(25,"mango", true)
console.log(`update array with three new element= ${fruits}`)
// addd element to the end (right) of an array
fruits.push("PETER",100)
console.log(`update array with teo new element to the right = ${fruits}`)
// find the index of the element 
let index_blueberries = fruits.indexOf("blueberries")
console.log(`what is the index of 'blueberries'? ${index_blueberries}`)
// if the return index = -1, then the element doesn't exist in the array
let index_PETER = fruits.indexOf("PETER")
console.log(`ehat is the index of 'PETER' ? ${index_PETER}`)

console.log("\n----- Exapmple 2 : if statement--------")
//if the statement is used to chech  if the condition statement is TRUE, then will run the lines  in between the curly braces
let day=true
let night=false
// check if it is day time
if (day=true){
    console.log(`good morning`) 

}
console.log(`END`)
let n1=10
let n2="10"
console.log("\n----- Exapmple 3 :if statemnet with logical operator  --------")

// check if n1 is equal to n2
if(n1==n2){
    console.log(`n1 is eqaul to n2 --> ${n1==n2}`)
}

console.log("END 2")

// check if n1 is exactly equal to n2
if (n1==n2){
    console.log(`n1 is exatly equal to n2 --> ${n1==n2}`)
}
console.log("END 3")
console.log("\n----- Exapmple 4 :check if a number is even or odd  --------")
//if else check two conditions
let number = 10 
if (number%2 === 0){ 
    console.log(`${number}is EVEN`)
}
else{ 
    console.log(`${number}is ODD`)
}

console.log("\n----- Exapmple 5 : check if an inout is string or number  --------")
let user_input = prompt ("Enter a username")
let check_username = isNaN(parseFloat(user_input))
console.log(`${user_input}is not a number? ${check_username}`)
if(check_username){
    console.log(`${user_input} is STRING`)
}
else{
    console.log(`${user_input} is a number`)
}
console.log("\n----- Exapmple 6: multiway conditional statement  --------")
let num1 = 9 
let num2 = "9"
if(num1 === num2){
    console.log(`num1 is  EXACTLY EQUAL to num2`)
}
else if (num1>num2){
    console.log("num1 is GREATER THAN num2")
}
else{ 
    console.log("error:unable to compare")
}

console.log("\n----- Exapmple 7: switch statement --------")
let gender = 'Female'

switch(gender){
    case "female": case "FEMALE": case "F": case "f": case "female":
        console.log("selected gender = FEMALE")
        break
    case "MALE":  case "MALE": case "M": case "m": case "male":
        console.log("selected gender = MALE")
        break
    case "other":  case "OTHER": case "O": case "o": case "other":
        console.log("selected gender = OTHER")
        break
    default:
        console.log("ERROR: unable to read the seletcted gender")

}

console.log("\n ------ exercise 1 -------")

console.log("\n ------ exercise 2 -------")
