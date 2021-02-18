const form = document.querySelector (".contactForm");
const name = document.querySelector ("#name");
const nameError = document.querySelector ("#nameError");
const subject = document.querySelector ("#text");
const subjectError = document.querySelector ("#subjectError");
const email = document.querySelector ("#email");
const emailError = document.querySelector ("#emailError");
const address = document.querySelector ("#address");
const addressError = document.querySelector ("#addressError");
const validationMsg = document.querySelector (".validation")



function validation (event){
    event.preventDefault();

    if(name.value.trim().length > 0){
        nameError.style.display = "none";
    } else{
        nameError.style.display = "block";
    }

    if(subject.value.length > 25){
        subjectError.style.display = "none";
    } else{
        subjectError.style.display = "block";
    }

    if(address.value.length > 25){
        addressError.style.display = "none";
    } else{
        addressError.style.display = "block";
    }

    if(emailValidation(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

addEventListener("submit", validation)

function emailValidation(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test (email);
    return patternMatches;

}

emailValidation();