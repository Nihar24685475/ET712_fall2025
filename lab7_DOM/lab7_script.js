/** 
 * niahr 
 * lab7 DOM
 * sep 25
 */
console.log("lab7 DOM by Nihar patel")
let titlenode = document.querySelector ("#title")
console.log(titlenode)
let desc = document.querySelector(".description")
console.log(desc)
// acess(select) elements by tag name
let heading1 = document.querySelector("h1")
console.log(heading1)

//access to selecr all elements by class name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log("loo[ through each element in the node list")
for (let index=0; index < description_all.length; index++){
    console.log(`${description_all[index].textContent}`)
}

// collect(select) the elements
let shape = document.querySelector(".shapeDivision")
let btn_square = document.querySelector(".btn_square")
let btn_circle = document.querySelector(".btn_circle")
let btn_rectangle = document.querySelector(".btn_rectangle")

// add event to each botton
btn_square.addEventListener("click", function(){
    shape.className  = "square"
    shape.textContent = "SQUARE"
    shape.style.backgroundColor = "gold";
    shape.style.fontSize = "3rem"
})

btn_circle.addEventListener("click", function(){
    shape.className = "circle"
    shape.textContent = "CIRCLE"
    shape.style.fontSize = "1rem"
    shape.style.backgroundColor = "hotpink";
})

btn_rectangle.addEventListener("click", function(){
    shape.className = "rectangle"
    shape.textContent = "RECTANGLE"
    shape.style.backgroundColor = "gray";
    shape.style.fontSize = "2rem"
})
