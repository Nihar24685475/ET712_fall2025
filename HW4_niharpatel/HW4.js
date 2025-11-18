//Exercise 1
const form = document.querySelector("#userform");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let fullname = document.querySelector("#name");
    let useremail = document.querySelector("#Email");
    let userpassword = document.querySelector("#Password");

    let nameError = document.querySelector("#nameError");
    let emailError = document.querySelector("#EmailError");
    let passwordError = document.querySelector("#PasswordError");
    let successMessage = document.querySelector("#successmsg");  

    let namevalue = fullname.value;
    let email = useremail.value;
    let password = userpassword.value;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    valid = true
    if (namevalue === ""){
        nameError.textContent = "Name cannot be empty";
        valid = false;
        }

    
    if (email === ""){
        emailError.textContent = "Email cannot be empty";
        valid = false;
    }
    


    const passwordPattern = /[#@$%&*]/;
    if (password === ""){
        passwordError.textContent = "Password cannot be emty"
        valid = false;    
    }
    else if (password.length < 5){
        passwordError.textContent = "Password must be at least 5 characters long";
        valid = false;
    }
    else if (!passwordPattern.test(password)){
        passwordError.textContent = "Password must contain at least one special character ex: #@$%&*";
        valid = false;
    }

    if (valid){
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }



})

//Exercise 2

const btnright = document.querySelector("#rightbtn");
const btnleft = document.querySelector("#leftbtn");
const gallerycontainer = document.querySelector(".Gallery_container");

const scrollAmount = 1500;

btnright.addEventListener("click", function(){
    if (gallerycontainer.scrollLeft <= 0){
        gallerycontainer.scrollTo({
            left: 3000,
            behavior: "smooth",
        });
    }else{
            gallerycontainer.scrollTo({
        left: -1500,
        behavior: "smooth",
    });}
});

btnleft.addEventListener("click", function(){
    if (gallerycontainer.scrollLeft >= 1500-10){
        gallerycontainer.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    }else{  
    gallerycontainer.scrollTo({
        left: 1500,
        behavior: "smooth",
    });
}
});

