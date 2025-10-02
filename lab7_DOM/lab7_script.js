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

//sep30
//event hendler
let btnpress = document.querySelector(".btnpress")
btnpress.onclick= function(){(alert(`${new Date()}`))}

// mouse event
let x = document.querySelector(".x")
let circle_paragraph = document.querySelector(".circle_paragraph")
x.onmouseover = function(){circle_paragraph.textContent += "- circle -"}

//event listener
//collect the element
let box_color = document.querySelector(".box_color")
// function to randomly pick a color as a a rgb value
const randomRGB = function(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
box_color.addEventListener("mouseout",function(){
    box_color.style.backgroundColor = randomRGB()}) 
    
// keyboard event
// collect the element
let inputtext = document.querySelector(".inputtext")
let username_paragraph = document.querySelector(".username_paragraph")
inputtext.addEventListener("keydown", function(){
    username_paragraph.textContent = "usernmae must have 3+ characters"})



// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
let p = document.querySelector(".ps1")

// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
p.addEventListener("mouseout", function(){
    p.textContent = "Nihar patel"
})

// search for the second p with class ps2
let sp = document.querySelectorAll(".ps2")
// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
sp[0].addEventListener("click", function(){
    sp[0].style.fontSize = "25px"
    sp[0].style.color = "olive"
})

// search for the first div with class divs2
let d1= document.querySelector(".divs2")
// add a click event to change the background color to indigo
d1.addEventListener("click",function(){
    d1.style.backgroundColor = "indigo";
})

// search for the second div with class divs3
let d2 = document.querySelector(".divs3")
// add a keydown event to change the width of divs3 to 300px

document.addEventListener("keydown",function(){
    d2.style.width = "300px";
})