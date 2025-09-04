/**
 * nihar patel
 * 9/4/2025
 * lab 3 loop
 */
console.log("nihar patel")
console.log(`\n------ example 1 : for loop AS a counter-----`)
// for loop to priint from 0 to 5
for (let x = 0; x <= 5; x++ ){
    console.log(x)
}

console.log(`\n------ example 2: for loop woth conditional statemnt-----`)
// print all even number betweem -20 and 20 (inclusive)
for (let x= -20; x <=20; x++ ){
    if(x%2 == 0){
        console.log(x)
    }
}

console.log(`\n------ example 3 : for loop as a decrement counter-----`)
// print number from 3 to 0 --. 3,2,1,0
for (let x = 3; x >=0; x--){
    console.log(x)
}

console.log(`\n------ example 4 : for loop in an array-----`)
let cars=[ 'Mazda' , 'BMW', 'Tesla', 'Jeep', 'Honda']
 for ( let index = 0; index<cars.length ; index++){
    console.log(cars[index])
 }
console.log(" for loop using 'of' statement")
 for(let each of cars){
    console.log(each)
 }

 console.log(`\n------ example 5 : application using for loop-----`)
 // fond how many car's name have more than 4 characters
 let car_counter = 0
 for ( let index = 0; index<cars.length ; index++){
    if( cars[index].length > 4 ){
        car_counter ++
    }

 }
 console.log(`There is/are ${ car_counter} car's name with 4+ characters`)
 
 console.log(`\n------ example 6: application using for loop -----`)
 // ask the user to guess number 1 and 9. The user has three chances
 let GUESS = 8 
 for (let counter = 1; counter <= 3 ; counter++ ){
    let user_number= parseInt(prompt("enter a number between 1 and 9"))
    console.log(`User guess = ${user_number}`)
    if(user_number === GUESS){ 
        console.log(`great! the number is ${GUESS}`)
        break
    }
    else if (user_number>GUESS){
        console.log(`wrong! the number should lower`)
    }
    else if (user_number<GUESS){
        console.log(`wrong! the number should be higher`)
    }
    if (counter==3){
        console.log(`Better luck next time bsdk`)
    }
 }
 
console.log(`\n------ example 7 : while loop as a counter-----`)
// print from 0 to 5
let y = 0 
while(y <= 5){
    console.log(y)
    y++
}
console.log(`\n------ example 8: validation an input -----`)
// check if input the number is between 1 to 9
let number = parseInt(prompt("enter the number between 1 and 9"))
//use the while loop to recollect the number if the number is not between
while(number <1 || number >9){ 
    number = parseInt(prompt("ERROR : enter the number agian between 1 and 9"))

}
console.log(`the collected number is ${number} `)

console.log(`\n------ example 8: simulate a bank transaction -----`)
let balance = 1000
while(true){
   
    user_transaction = parseInt(prompt("how can I help you today?\npress 1 for account\npress 2 for deposite\n press 3 for withdraw\npress any other number to exit "))
    if user_
    switch(user_transaction){
        case 1:
            console.log(`your balance is ${balance}`)
            break
        case 2:
            let deposit = parseInt(prompt("how much do you want to deposite"))
        if (deposit>0)
            balance += deposit
        else{ 
            console.log(`ERROR`)
        }
        break
        default:
            console.log(`thank you for visiting!`)
            break
        }
        

         
}



