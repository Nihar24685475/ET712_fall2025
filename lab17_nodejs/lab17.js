// console.log("Nihar patel")
// console.warn("warning! check the last line before process")
// console.error("ERROR, port is not available")
// console.trace("TRACE LOCATION")

// setTimeout(()=>{
//     console.warn("Warning!input stating for the next line ")
// },3000)
console.log('----- Example 2: creating module file -----')
// const name = require("./mod")
import name from "./mod"

console.log(name.helper("Peter"))
console.log(name.id(12345))
console.log(name.email("Nihar850@.edu"))

console.log('---- Eample 3: event emitter')
let event = require('event')
let eventEnitter = new event.EventEnitter()

eventEnitter.on ('test',function(a){
    console.log(a)
})
eventEnitter.emit('text',"EVENTS IN NODEJS")




