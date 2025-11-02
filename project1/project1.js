let reset = document.querySelector("#reset-btn");
let quizContainer = document.querySelector(".quiz-container");

// Question 1
let question1 = document.querySelector(".q1");
let message1 = question1.querySelector(".message");

question1.querySelector(".optionC").addEventListener("click", function(){
    message1.textContent="✅ correct answer 🎉👏";
    question1.classList.add("hide");
});
question1.querySelector(".optionA").addEventListener("click", function(){
    message1.textContent="❌wrong! try again..";
});
question1.querySelector(".optionB").addEventListener("click", function(){
    message1.textContent="❌wrong! try again..";
});

// Question 2
let question2 = document.querySelector(".q2");
let message2 = question2.querySelector(".message");

question2.querySelector(".optionA").addEventListener("click", function(){
    message2.textContent="✅ correct answer 🎉👏";
    question2.classList.add("hide");
});
question2.querySelector(".optionB").addEventListener("click", function(){
    message2.textContent="❌wrong! try again..";
});
question2.querySelector(".optionC").addEventListener("click", function(){
    message2.textContent="❌wrong! try again..";
});

// Question 3
let question3 = document.querySelector(".q3");
let message3 = question3.querySelector(".message");

question3.querySelector(".optionB").addEventListener("click", function(){
    message3.textContent="✅ correct answer 🎉👏";
    question3.classList.add("hide");
});
question3.querySelector(".optionA").addEventListener("click", function(){
    message3.textContent="❌wrong! try again..";
});
question3.querySelector(".optionC").addEventListener("click", function(){
    message3.textContent="❌wrong! try again..";
});

// Question 4
let question4 = document.querySelector(".q4");
let message4 = question4.querySelector(".message");

question4.querySelector(".optionA").addEventListener("click", function(){
    message4.textContent="✅ correct answer 🎉👏";
    question4.classList.add("hide");
});
question4.querySelector(".optionB").addEventListener("click", function(){
    message4.textContent="❌wrong! try again..";
});
question4.querySelector(".optionC").addEventListener("click", function(){
    message4.textContent="❌wrong! try again..";
});

// Question 5
let question5 = document.querySelector(".q5");
let message5 = question5.querySelector(".message");

question5.querySelector(".optionB").addEventListener("click", function(){
    message5.textContent="✅ correct answer 🎉👏";
    question5.classList.add("hide");
});
question5.querySelector(".optionA").addEventListener("click", function(){
    message5.textContent="❌wrong! try again..";
});
question5.querySelector(".optionC").addEventListener("click", function(){
    message5.textContent="❌wrong! try again..";
});

// Question 6
let question6 = document.querySelector(".q6");
let message6 = question6.querySelector(".message");

question6.querySelector(".optionA").addEventListener("click", function(){
    message6.textContent="✅ correct answer 🎉👏";
    question6.classList.add("hide");
});
question6.querySelector(".optionB").addEventListener("click", function(){
    message6.textContent="❌wrong! try again..";
});
question6.querySelector(".optionC").addEventListener("click", function(){
    message6.textContent="❌wrong! try again..";
});

// Question 7
let question7 = document.querySelector(".q7");
let message7 = question7.querySelector(".message");

question7.querySelector(".optionA").addEventListener("click", function(){
    message7.textContent="✅ correct answer 🎉👏";
    question7.classList.add("hide");
});
question7.querySelector(".optionB").addEventListener("click", function(){
    message7.textContent="❌wrong! try again..";
});
question7.querySelector(".optionC").addEventListener("click", function(){
    message7.textContent="❌wrong! try again..";
});

// Question 8
let question8 = document.querySelector(".q8");
let message8 = question8.querySelector(".message");

question8.querySelector(".optionA").addEventListener("click", function(){
    message8.textContent="✅ correct answer 🎉👏";
    question8.classList.add("hide");
});
question8.querySelector(".optionB").addEventListener("click", function(){
    message8.textContent="❌wrong! try again..";
});
question8.querySelector(".optionC").addEventListener("click", function(){
    message8.textContent="❌wrong! try again..";
});

// Question 9
let question9 = document.querySelector(".q9");
let message9 = question9.querySelector(".message");

question9.querySelector(".optionA").addEventListener("click", function(){
    message9.textContent="✅ correct answer 🎉👏";
    question9.classList.add("hide");
});
question9.querySelector(".optionB").addEventListener("click", function(){
    message9.textContent="❌wrong! try again..";
});
question9.querySelector(".optionC").addEventListener("click", function(){
    message9.textContent="❌wrong! try again..";
});

// Question 10
let question10 = document.querySelector(".q10");
let message10 = question10.querySelector(".message");

question10.querySelector(".optionA").addEventListener("click", function(){
    message10.textContent="✅ correct answer 🎉👏";
    question10.classList.add("hide");
});
question10.querySelector(".optionB").addEventListener("click", function(){
    message10.textContent="❌wrong! try again..";
});
question10.querySelector(".optionC").addEventListener("click", function(){
    message10.textContent="❌wrong! try again..";
});

// ✅ Reset All — show all + clear + shuffle
reset.addEventListener("click", function(){
    // show all again
    document.querySelectorAll(".numbers").forEach(q => {
        q.classList.remove("hide");
        q.querySelector(".message").textContent = "";
    });

    // shuffle questions
    let allQuestions = Array.from(quizContainer.children);
    allQuestions.sort(() => Math.random() - 0.5);
    allQuestions.forEach(q => quizContainer.appendChild(q));
});





// learning color

let selectedColor = null;
let selectedName = null;

let messageColor = document.querySelector("#colorMessage");
let colorBoxes = document.querySelectorAll(".color_box");
let colorNames = document.querySelectorAll(".color_name");
let names_side = document.querySelector(".names_side")


for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].addEventListener("click", function() {
    for (let j = 0; j < colorBoxes.length; j++) {
      colorBoxes[j].style.border = "none";
    }
    colorBoxes[i].style.border = "4px solid darkblue";
    selectedColor = colorBoxes[i].id;
    messageColor.textContent = "Now choose the color name...";
  });
}

for (let j = 0; j < colorNames.length; j++) {
  colorNames[j].addEventListener("click", function() {
    for (let k = 0; k < colorNames.length; k++) {
      colorNames[k].style.border = "2px solid #333";
    }
    colorNames[j].style.border = "4px solid darkblue";
    selectedName = colorNames[j].textContent.toLowerCase();
    if (selectedColor === selectedName) {
        messageColor.textContent = "✅ Correct! Great job!";
    } 
    else {
        messageColor.textContent = "❌ Wrong! Try again...";
    }
});
};





// learn animals
let animal = document.querySelector(".animal")
const closeBtn  = document.querySelector("#closeBtn");
const closeBtn2 = document.querySelector("#closeBtn2");
const closeBtn3 = document.querySelector("#closeBtn3");
const closeBtn4 = document.querySelector("#closeBtn4");
const closeBtn5 = document.querySelector("#closeBtn5");
const closeBtn6 = document.querySelector("#closeBtn6");
const closeBtn7 = document.querySelector("#closeBtn7");
const closeBtn8 = document.querySelector("#closeBtn8");
const closeBtn9 = document.querySelector("#closeBtn9");
const closeBtn10 = document.querySelector("#closeBtn10");


const dog= document.querySelector("#DOG");
const LEARN_DOG= document.querySelector("#LEARN_DOG");
dog.addEventListener("click",function(){
    LEARN_DOG.style.display = "block"
})
closeBtn.addEventListener("click",function(){
    LEARN_DOG.style.display = "none"
})

const cat = document.querySelector("#CAT");
const LEARN_CAT = document.querySelector("#LEARN_CAT");
cat.addEventListener("click", function() {
    LEARN_CAT.style.display = "block";
});
closeBtn2.addEventListener("click",function(){
    LEARN_CAT.style.display = "none"
})


const cow = document.querySelector("#COW");
const LEARN_COW = document.querySelector("#LEARN_COW");
cow.addEventListener("click", function() {
    LEARN_COW.style.display = "block";
});
closeBtn3.addEventListener("click",function(){
    LEARN_COW.style.display = "none"
})

const sheep = document.querySelector("#SHEEP");
const LEARN_SHEEP = document.querySelector("#LEARN_SHEEP");
sheep.addEventListener("click", function() {
    LEARN_SHEEP.style.display = "block";
});
closeBtn4.addEventListener("click",function(){
    LEARN_SHEEP.style.display = "none"
});


const rabbit = document.querySelector("#REBBIT");
const LEARN_REBBIT = document.querySelector("#LEARN_REBBIT");
rabbit.addEventListener("click", function() {
    LEARN_REBBIT.style.display = "block";
});
closeBtn5.addEventListener("click",function(){
    LEARN_REBBIT.style.display = "none"
})


const koala = document.querySelector("#KOALA");
const LEARN_KOALA = document.querySelector("#LEARN_KOALA");
koala.addEventListener("click", function() {
    LEARN_KOALA.style.display = "block";
});
closeBtn6.addEventListener("click",function(){
    LEARN_KOALA.style.display = "none"
})


const lion = document.querySelector("#LION");
const LEARN_LION = document.querySelector("#LEARN_LION");
lion.addEventListener("click", function() {
    LEARN_LION.style.display = "block";
});
closeBtn7.addEventListener("click",function(){
    LEARN_LION.style.display = "none"
})


const elephant = document.querySelector("#ELEPHANT");
const LEARN_ELEPHANT = document.querySelector("#LEARN_ELEPHANT");
elephant.addEventListener("click", function() {
    LEARN_ELEPHANT.style.display = "block";
});
closeBtn8.addEventListener("click",function(){
    LEARN_ELEPHANT.style.display = "none"
})


const fox = document.querySelector("#FOX");
const LEARN_FOX = document.querySelector("#LEARN_FOX");
fox.addEventListener("click", function() {
    LEARN_FOX.style.display = "block";
});
closeBtn9.addEventListener("click",function(){
    LEARN_FOX.style.display = "none"
})


const panda = document.querySelector("#PANDA");
const LEARN_PANDA = document.querySelector("#LEARN_PANDA");
panda.addEventListener("click", function() {
    LEARN_PANDA.style.display = "block";
});
closeBtn10.addEventListener("click",function(){
    LEARN_PANDA.style.display = "none"
})


const btnright= document.querySelector(".btnright");    
const btnleft= document.querySelector(".btnleft");
const learn_Alphabet = document.querySelector(".learn_Alphabet")
function scrollGallery(pixels){
    const lettergallery = document.querySelector("section.learn_Alphabet").scrollBy({
        left:pixels,
        behavior: "smooth"
    })
}
btnright.addEventListener("click",function(){
    scrollGallery(-260)

})
btnleft.addEventListener("click",function(){
    scrollGallery(260)
})


