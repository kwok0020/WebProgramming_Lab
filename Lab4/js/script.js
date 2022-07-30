let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#pass');
let password2Input  = document.querySelector('#pass2');
let termsInput = document.querySelector('#terms');

let emailError = document.querySelector('#emailError');
let pw1Error = document.querySelector('#pass1Error');
let pw2Error = document.querySelector('#pass2Error');
let termsError = document.querySelector('#termsError');

let defaultMsg = "";
let termsErrorMsg = "Please accept the terms and conditions";

function resetProfile() {
    emailError.textContent = '';
    pw1Error.textContent = '';
    pw2Error.textContent = '';
    termsError.textContent = '';
 }
    
function validateEmail(){

    let email = emailInput.value;
    let emailErrorMsg = "Please input valid email"
    let regexp = /\S+@\S+\.\S+/;
    let error = regexp.test(email) ? "" : emailErrorMsg;
    return error;

}


function validatePassword(){

        let pw1 = passwordInput.value;
        let pw2 = password2Input.value;
        let error = "";
        //display warning if the input of two password was not the same.
        if(pw1 === ""){
            error = "Please enter password";
        } 

        if(pw2 === ""){
            error = "Please enter password";
        } else if(pw2 != pw1){
            error = "Password not match";
        }
        return error;       

}

function validateTerms(){

    let error = termsInput.checked ? defaultMsg : termsErrorMsg;
    return error;

}

function validate(){

    let valid = true;
    let emailValidation = validateEmail();
    let pwValidation = validatePassword();
    let termsValidation = validateTerms();

    if(emailValidation !== ''){
        emailError.textContent = emailValidation;
        valid = false;
    }

    if(pwValidation !== ''){
        pw1Error.textContent = pwValidation;
        pw2Error.textContent = pwValidation;
        valid = false;
    }

    if(termsValidation !== ''){
        termsError.textContent = termsValidation;
        valid = false;
    }

    return valid;
   
}


//clear the warning message when the email is entered
document.querySelector('#email').addEventListener("blur", function(){
    if (this.value !== ""){
        emailError.textContent = "";
    }
});

//clear the warning message when the password is entered
document.querySelector('#pass').addEventListener("blur", function(){
    if (this.value !== ""){
        pw1Error.textContent = "";
    }
});

//clear the warning message when the Re-type password is entered
document.querySelector('#pass2').addEventListener("blur", function(){
    if (this.value !== ""){
        pw2Error.textContent = "";
    }
});

//clear the warning message when the checked the box of terms & conditions
document.querySelector('#terms').addEventListener("click", function(){
    if(form.termsInput !== ""){
        termsError.textContent = "";
    }
});

//Add a reser event listener to the form to invoke the resetProfile() method when the form is reset
document.form.addEventListener("reset", resetProfile);
