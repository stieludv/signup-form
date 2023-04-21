const form = document.querySelector(".sign-up-form");

form.addEventListener("keyup", (e) => {
    if (form.checkValidity() === false) {
        validateInputs();
    }
});

form.addEventListener("mousedown", (e) => {
    if (form.checkValidity() === false) {
        validateInputs();
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity() === false) {
        validateInputs();

        // Submit the form to trigger validation error messages
        // form.reportValidity();
    } 
    else {
        // Submit the form if all fields are valid
        form.submit();
    }
});




function validateInputs() {
    // Get inputs
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const passwordConfirmationInput = document.getElementById("password-confirmation");

    // Get .field-holder for CSS variables
    const fieldHolder = document.querySelector(".field-holder");

    // Error messages
    const missingFirstNameError = "'Please enter your first name'";
    const missingLastNameError = "'Please enter your last name'";
    const missingEmailError = "'Please enter your email address'";
    const invalidEmailError = "'Please enter a valid email address''";
    const missingPhoneError = "'Please enter your phone number'";
    const invalidPhoneError = "'Please enter a valid phone number'";
    const missingPasswordError = "'Please enter your password'";
    const missingPasswordConfirmationError = "'Please confirm your password'";
    const passwordMismatchError = "'Passwords do not match'";

    // Validate name & lastname inputs
    const firstNameInputFieldHolder = firstNameInput.parentElement;
    const lastNameInputFieldHolder = lastNameInput.parentElement;
    if (firstNameInput.validity.valueMissing) {
        firstNameInput.setCustomValidity(missingFirstNameError);
        firstNameInputFieldHolder.style.setProperty("--first-name-error", missingFirstNameError);
    } else {
        firstNameInput.setCustomValidity("");
        firstNameInputFieldHolder.style.setProperty("--first-name-error", "");
    }
    if (lastNameInput.validity.valueMissing) {
        lastNameInput.setCustomValidity(missingLastNameError);
        lastNameInputFieldHolder.style.setProperty("--last-name-error", missingLastNameError);
    }
    else {
        lastNameInput.setCustomValidity("");
        lastNameInputFieldHolder.style.setProperty("--last-name-error", "");
    }

    // Validate email and phone inputs
    const emailInputFieldHolder = emailInput.parentElement;
    const phoneInputFieldHolder = phoneInput.parentElement;
    if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity(missingEmailError);
        emailInputFieldHolder.style.setProperty("--email-error", missingEmailError);
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity(invalidEmailError);
        emailInputFieldHolder.style.setProperty("--email-error", invalidEmailError);
    } else {
        emailInput.setCustomValidity("");
        emailInputFieldHolder.style.setProperty("--email-error", "");
    }
    if (phoneInput.validity.valueMissing) {
        phoneInput.setCustomValidity(missingPhoneError);
        phoneInputFieldHolder.style.setProperty("--phone-error", missingPhoneError);
    }
    else if (phoneInput.validity.patternMismatch) {
        phoneInput.setCustomValidity(invalidPhoneError);
        phoneInputFieldHolder.style.setProperty("--phone-error", invalidPhoneError);
    }
    else {
        phoneInput.setCustomValidity("");
        phoneInputFieldHolder.style.setProperty("--phone-error", "");
    }

    // Validate password inputs
    const passwordInputFieldHolder = passwordInput.parentElement;
    const passwordConfirmationInputFieldHolder = passwordConfirmationInput.parentElement;
    if (passwordInput.validity.valueMissing) {
        passwordInput.setCustomValidity(missingPasswordError);
        passwordInputFieldHolder.style.setProperty("--password-error", missingPasswordError);
    }
    else {
        passwordInput.setCustomValidity("");
        passwordInputFieldHolder.style.setProperty("--password-error", "");
    }
    if (passwordConfirmationInput.validity.valueMissing) {
        passwordConfirmationInput.setCustomValidity(missingPasswordConfirmationError);
        passwordConfirmationInputFieldHolder.style.setProperty("--password-confirmation-error", missingPasswordConfirmationError);
    } 
    else {
        passwordConfirmationInput.setCustomValidity("");
        passwordConfirmationInputFieldHolder.style.setProperty("--password-confirmation-error", "");
    }
    if (passwordInput.value !== passwordConfirmationInput.value) {
        passwordConfirmationInput.setCustomValidity(passwordMismatchError);
        passwordConfirmationInputFieldHolder.style.setProperty("--password-confirmation-error", passwordMismatchError);
    }
    else {
        passwordConfirmationInput.setCustomValidity("");
        passwordConfirmationInputFieldHolder.style.setProperty("--password-confirmation-error", "");
    }
}

