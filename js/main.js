const form = document.querySelector(".sign-up-form");

form.addEventListener("keyup", (e) => {
    if (form.checkValidity() === false) {
        validateInputs();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity() === false) {
        validateInputs();

        // Submit the form to trigger validation error messages
        form.reportValidity();
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

    // Validate name & lastname inputs
    if (firstNameInput.validity.valueMissing) {
        firstNameInput.setCustomValidity("Please enter your first name");
    } else {
        firstNameInput.setCustomValidity("");
    }
    if (lastNameInput.validity.valueMissing) {
        lastNameInput.setCustomValidity("Please enter your last name");
    }
    else {
        lastNameInput.setCustomValidity("");
    }

    // Validate email and phone inputs
    if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity("Please enter your email address");
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Please enter a valid email address");
    } else {
        emailInput.setCustomValidity("");
    }
    if (phoneInput.validity.valueMissing) {
        phoneInput.setCustomValidity("Please enter your phone number");
    }
    else if (phoneInput.validity.patternMismatch) {
        phoneInput.setCustomValidity("Please enter a valid phone number");
    }
    else {
        phoneInput.setCustomValidity("");
    }

    // Validate password inputs
    if (passwordInput.validity.valueMissing) {
        passwordInput.setCustomValidity("Please enter your password");
    }
    else {
        passwordInput.setCustomValidity("");
    }
    if (passwordConfirmationInput.validity.valueMissing) {
        passwordConfirmationInput.setCustomValidity("Please confirm your password");
    } 
    else {
        passwordConfirmationInput.setCustomValidity("");
    }
    if (passwordInput.value !== passwordConfirmationInput.value) {
        passwordConfirmationInput.setCustomValidity("Passwords do not match");
    }
    else {
        passwordConfirmationInput.setCustomValidity("");
    }
}