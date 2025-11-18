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
let multiple3 = []
let multiple5 = []
let multiple7 = []

for (let x = 0; x < num.length; x++){
    let n = num[x]
    if (n % 3 === 0){
        multiple3.push(n);

    }
    if (n % 5 === 0){
        multiple5.push(n);
    }
    if (n % 7  === 0){
        multiple7.push(n);
    }
}
console.log(`${multiple3.length} number are multiple of 3 ${multiple3}`)
console.log(`${multiple5.length} number are multiple of 5 ${multiple5}`)
console.log(`${multiple7.length} number are multiple of 7 ${multiple7}`)

36,25,15,45,75,21,36,60,4,6