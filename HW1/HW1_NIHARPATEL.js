/** nihar patel
 * HW 1 JavaScript Basics: conditional statement and for loop
 */

console.log("\n------ Program 1: conditional statement -----")
let something = prompt(`enter something`)
if( something > 0){
    console.log(`Think positively`)
}
else if( something < 0){
    console.log(`Never have negative balance!`)
}
else if( something === "" ){
    console.log(`Your answer was blank!`)

}
else if(something === null){
    console.log(`Null and void!`)
}
else {
    console.log(`Yin and Yang!`)
}

console.log(`Program 2: for loop and nested conditional statement`)

let num = []
for (let x = 0; x <= 9; x++ ){
    let user_number = prompt(`enter 10 number`)
    if (user_number == null || user_number === ""){
        console.log("The input is not a number. plsease enter number")
        x--
    }
    else {
        num.push(user_number)
    }

}
console.log(`the 10 number you have selected ${num}`)
let multiple3 = 0
let multiple5 = 0
let multiple7 = 0

for (let x = 0; x < num.length; x++){
    let n = num[x]
    if (n % 3 === 0){
        multiple3++;

    }
    if (n % 5 === 0){
        multiple5++;
    }
    if (n % 7  === 0){
        multiple7++;
    }
}
console.log(`${multiple3} number are multiple of 3`)
console.log(`${multiple5} number are multiple of 5`)
console.log(`${multiple7} number are multiple of 7`)
