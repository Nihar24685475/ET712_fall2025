/**
 * Nihar patel
 * Homework 2 - functions, loops, and conditional statement
 */

function name_counting(){
    let user_input = prompt("enter the names with commas (like : peter,andrew,ect")
    let names = user_input.split(",")
    let count = 0
    for ( let index = 0; index<names.length ; index++){
        if( names[index].length < 5 ){
            count++
        }
    }
    return count
    console.log("number of names that has less than 5 characters :", name_counting())

}

function checkNum(){
    while(true){
        let number = prompt("Enter the number: ")
    if (number == null){
        prompt("Enter a valid number")
        continue
    }
    else if(number == ""){
        prompt("Enter a valid number")
        continue
    }
    else if(isNaN(number)){
        prompt("Enter a valid number")
        continue
    }
    
    if (number%2 === 0){ 
            return true
        }
        else{ 
            return false
        }
    }

}