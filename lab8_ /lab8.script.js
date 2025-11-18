/**
 * Nihar Patel
 * lab8, events
 * oct 7,2025
 */
console.log("nihar patel")
let btnpressme = document.querySelector(".btnpressme");
btnpressme.addEventListener("click", function(e) {
    if(e.target.textContent == " PRESS ME"){
        e.target.textContent="key was pressed"
    }
    else{
        e.target.textContent="PRESS ME"
    }  
    //toggle between classes and css   
    e.target.classList.toggle("btnactive")
})
let list = document.getElementById("list");

list.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase()==="li"){
        event.target.remove()
    }

})
const qcc = document.querySelector(".qcc");
qcc.addEventListener("click", function(e){
    e.preventDefault()
    alert("qcc web under maintenance")
}) 
/** WINDOW EVENT */
let btnscroll = document.querySelector(".btnscroll");
let content = document.querySelector("#content");
btnscroll.addEventListener("click", function(){
    window.scrollBy(200,0)
})
/* photo for the gallery*/
const btnright= document.querySelector(".btnright");    
const btnleft= document.querySelector(".btnleft");

// define function to scroll the gallery by an image size
function scrollGallery(pixels){
    const gallery = document.querySelector("div.gallery-container").scrollBy({
        left: pixels,
        behavior: "smooth"

    })
    
}
btnright.addEventListener("click",function(){
    scrollGallery(500)

})
btnleft.addEventListener("click",function(){
    scrollGallery(-500)
})

// exercise lab8



const clickCircle = document.getElementById('click-circle');
const counterDisplay = document.getElementById('counter-display');
const resetButton = document.getElementById('reset-button');

let clickCount = 0;

function updateDisplay() {
  counterDisplay.textContent = clickCount;
}

clickCircle.addEventListener('click', () => {
  clickCount++;
  updateDisplay();
});

resetButton.addEventListener('click', () => {
  clickCount = 0;
  updateDisplay();
});

updateDisplay();
