/**
 * Nihar Patel
 * lab, functions
 * sep 9, 2025
 */
console.log("Nihar Patel")
// define a function to print massege 
function msg(){
    console.log("hello world!")
}
// define a funciton t oprint from 3 to 1

function printCount(){
    console.log(`------ example 2 -------`)
    for (let n = 3; n > 0; n--){
        console.log(n)
    }
}
//defirn a function that passed a username
function greeting(username){
    console.log("------- Examaple 3 ------")
    console.log(`welcome to js ${username}`)
}
// define a finction passes a massege and print it in upper case
function upperMassege(message){
    console.log(`---- example 4 ------`)
    let changeupper = message.toUpperCase()
    console.log(changeupper)
}
// define a functino to simulate a snake eye game
// pass two number to funsction , and check if buth number are'1'
function isSnakeEyes(dice1, dice2){
        console.log(`---- example 5 ------`)
    if (dice1 === 1 && dice2 === 1){
        console.log("snake.eyes")

    }
    else{
        console.log("Not a snake eyes!")
    }
}
// define a finction that returns the area of a ractangle
function areaRectangle(lenght, width){
        console.log(`---- example 6 ------`)

    return lenght*width

}
// define a function to check a temperature, if teh tremperature is greater than 75 , return 'true', otherwise, it return 'flase'
function checkTemperature(temperature){
    if (temperature>= 75){
        return true
    }
    else { 
        return false
    }
}
console.log(`-------- exercide 1 ------`)
function checkName(){
    while(true){
    let name = prompt(' enter a name')
    if (name == ""){
        prompt (' you forget to Enter name. Enter a name again')
    }
    else if (name == null){
        prompt ('you forget to Enter name. Enter a name again')
    }
    else if (name == isNaN){
        prompt(`${name} invalid !`)
    }
}
}
