let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");

let lowercaseEl = document.getElementById("lowercase");
let uppercaseEl = document.getElementById("uppercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");

let generateBtn = document.getElementById("getBtn");
let copyBtn = document.getElementById("copy");
let passwordIndicator = document.getElementById("passwordIndicator");

let lowercaseLetters = "abcdefghijklmnopqrstuvwxy";
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+=[]{}\\|;':\",./<>?";

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
    generatePassword();
});

function generatePassword() {
    let password = "";
    let characters = "";
    let length = inputSlider.value;

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    passBox.value = password;
    updatePasswordIndicator();
}

generateBtn.addEventListener("click", () => {
    generatePassword()
});

function updatePasswordIndicator() {
    let passwordStrength = getPasswordStrength(passBox.value);
    passwordIndicator.className = "passwordIndicator " + passwordStrength;
}

function getPasswordStrength(password) {
    if (password.length <= 10) {
        return "weak"
    } else if (password.length <= 20) {
        return "medium"
    } else {
        return "strong"
    }
}

window.addEventListener("DOMContentLoaded", () => {
    updatePasswordIndicator()
});

copyBtn.addEventListener("click", () => {
    if (passBox != "" || passBox.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerHTML = "check";
        setTimeout(() => {
            copyBtn.innerHTML = "content_copy";
        }, 2000)
    }
});