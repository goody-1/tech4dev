const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameError = fullname.nextElementSibling;
const emailError = email.nextElementSibling;
const pswdError = password.nextElementSibling;


const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNameValid = /[a-zA-Z]{2,} [a-zA-Z]{2,} [a-zA-Z]{2,}/.test(fullname.value.trim());
    const isEmailValid = emailRegExp.test(email.value);
    const pswd = password.value;

    if (!isNameValid)
    {
        fullname.className = "invalid";
        nameError.textContent = "Please enter your full name including your middle name";
        nameError.className = "error active";
    }
    else
    {
        fullname.className = "valid";
        nameError.textContent = "";
        nameError.className = "error";
    }

    if (!isEmailValid)
    {
        email.className = "invalid";
        emailError.textContent = "Please enter a valid email";
        emailError.className = "error active";
    }
    else
    {
        email.className = "valid";
        emailError.textContent = "";
        emailError.className = "error";
    }

    password.className = "invalid";
    pswdError.className = "error active";

    if (pswd.length < 8)
        pswdError.textContent = "Password must be at least 8 characters";
    else if (!/\d/.test(pswd))
        pswdError.textContent = "Password must contain at least a number";
    else if (!/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(pswd))
        pswdError.textContent = "Password must contain a special character";
    else
    {
        password.className = "valid";
        pswdError.textContent = "";
        pswdError.className = "error";
    }
})
