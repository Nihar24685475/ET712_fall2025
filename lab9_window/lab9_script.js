let displaypexels= document.querySelector(".displaypexels")
// read the pixel from the y aixs
window.addEventListener("scroll",function(){
    let y_pixels = window.scrollY
    displaypexels.innerHTML = `${y_pixels} px away from the top`
})

//to the top
const totop = document.querySelector(".totop")
window.addEventListener("scroll", function(){
    let y_pixels = this.window.scrollY
    if (y_pixels>600){
        totop.style.display = "block"
    }
    else{
        totop.style.display = "none"
    }
})
// resize event : change bsackground color it the window resist
window.addEventListener("resize",function(){
    displaypexels.style.backgroundColor = "crimson"

})
// load event : when the page finishes loading , open an alert dialog
window.addEventListener("load",function(){
    this.alert("page funlly loaded!")
})

//modal window
const openmodal1 = document.querySelector("#openmodal1")
const openmodal2 = document.querySelector("#openmodal2")
const openmodal3 = document.querySelector("#openmodal3")
const openmodal4 = document.querySelector("#openmodal4")


const modalOverlay = document.querySelector("#modalOverlay")
const modalOverlay2 = document.querySelector("#modalOverlay2")
const modalOverlay3 = document.querySelector("#modalOverlay3")
const modalOverlay4 = document.querySelector("#modalOverlay4")


const closeBtn= document.querySelector("#closeBtn")
const closeBtn2= document.querySelector("#closeBtn2")
const closeBtn3= document.querySelector("#closeBtn3")
const closeBtn4= document.querySelector("#closeBtn4")



openmodal1.addEventListener("click",function(){
    modalOverlay.style.display = "block"
})
closeBtn.addEventListener("click",function(){
    modalOverlay.style.display = "none"
})

openmodal2.addEventListener("click",function(){
    modalOverlay2.style.display = "block"
})
closeBtn2.addEventListener("click",function(){
    modalOverlay2.style.display = "none"
})

openmodal3.addEventListener("click",function(){
    modalOverlay3.style.display = "block"
})
closeBtn3.addEventListener("click",function(){
    modalOverlay3.style.display = "none"
})

openmodal4.addEventListener("click",function(){
    modalOverlay4.style.display = "block"
})
closeBtn4.addEventListener("click",function(){
    modalOverlay4.style.display = "none"
})
