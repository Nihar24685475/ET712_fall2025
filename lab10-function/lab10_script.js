console.log("nihar patel");
// collect the form
let myform = document.querySelector("#form1")
let greeting = document.querySelector(".greeting")
let display_username = document.querySelector(".display_username")

// collect date within the form after the submit button is clicked
myform.addEventListener("SUBMIT", function(event){
    // prevent the default form behavior
    event.preventDefault();

    //colleth the data 
    let usernameInput = document.querySelector("#username")
    let usernamevalue = usernameInput.value;
    
    if (usernamevalue.tirm() === "") {
        alert("Please enter username");
        return;
    }
    //after validation passes, the data is sent to server
    //in html, after the validation, the greeting massege will be displayed the username
    greeting.style.display = "block";
    display_username.textContent = usernamevalue;
    usernameInput.value = "";
    myform.submit();

})
let btnsubmit = document.querySelector(".btnsubmit")
window.addEventListener("load", function(){
    btnsubmit.disabled = true;
})
let username_error_msg= document.querySelector(".username_error_msg")
let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("input", function(){
    usernamevalue = usernameInput.value;
    usernamevaluelenght = usernamevalue.length;


    if(usernamevaluelenght >=5 && usernamevaluelenght <20){
        username_error_msg.textContent = "";
        btnsubmit.disbled = false;
        usernameInput.classList.add("active_input_valid")
    }
    else if (usernamevaluelenght === 20){
        username_error_msg.textContent = "Username cannot exceed 20 characters";
    }
    else{
        username_error_msg.textContent = "Username must be at least 5 characters";
        btnsubmit.disabled = true;
        usernameInput.classList.remove("active_input_valid")    
        usernameInput.classList.add("active_input_invalid")
    }
})

/**
 * oct 21
collect the element  */
const inputpassword = document.querySelector("#password")
//add a focus event to the input
inputpassword.addEventListener("focus", function(){
    inputpassword.classList.add("active_input_valid")
})

// add a blur event to the input
inputpassword.addEventListener("blur", function(){
    inputpassword.classList.remove("active_input_valid")
    inputpassword.classList.add("active_input_invalid")
})



// shuffled word
const originalword = "javascript";

// functooin to shuffle the word

function shuffleword(word){
    return word
    .split("")
    .sort(()=>Math.random()-0.5)
    .join("");
}
 



//collect the element
const scrambleword = document.querySelector("#Shuffledword")
const guessinput = document.querySelector("#guessInput")
const wordfeedback = document.querySelector("#wordfeedback")
//show the shuffled word

const shuffled = shuffleword(originalword)
scrambleword.textContent = shuffled;    

//add input event
guessInput.addEventListener("input", function(){
    //collect teh typed in the input without begin/end spaces and convert lower case
    const guess = guessInput.value
    if (guess === originalword){
        wordfeedback.textContent = "Correct! You guessed the word.";
        wordfeedback.classList.add("active_input_valid")
    }
    else{
        wordfeedback.textContent = "Incorrect, try again.";
        
        wordfeedback.classList.remove("active_input_valid")
        wordfeedback.classList.add("active_input_invalid")

    }
})


const takenUsernames = ['admin', 'user123',  'testuser', 'guest', 'peterpan'];
const form = document.querySelector('#regForm');
const enteredname = document.querySelector('#username1');
const btnsubmit1 = document.querySelector('.btnsubmit');
const feedback = document.querySelector('.feedback');

enteredname.addEventListener('input',function(){
    const usernameInput = enteredname.value;
    //if username is taken)
    
    if (takenUsernames.includes(usernameInput)){
        feedback.textContent = "Username is already taken.";
        feedback.style.color = "red";
        btnsubmit.disabled = false;
    }
    else{
        feedback.textContent = "Username is avlailable.";
        feedback.style.color = "green";
        btnsubmit.disabled = true
    }
})

form.addEventListener("submit", function(event){
    const usernameInput = enteredname.value;
    if (takenUsernames.includes(usernameInput)){
        alert("Please choose a different username.");
    }
    else{
        alert("Form submitted successfully!");
    }
})  