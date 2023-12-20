// VARIABLES
// operation variables
let firstNumber;
let operator;
let secondNumber;

// display variable
let display = "";

// FUNCTIONS
// maths operator functions
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

// operate function
function operate(num1, num2, operator) {
    return operator(num1, num2);
};

function updateDisplay(value) {
    const displayField = document.querySelector(".display");
    
    display = display + value;
    displayField.textContent = display;
};

// =====================================
// UI STUFF
// =====================================
const displayButton = document.querySelectorAll(".display-button");

displayButton.forEach(button => {
    button.addEventListener("click", () => {
        updateDisplay(button.value);
    });
});