// VARIABLES
// operation variables
let firstNumber;
let operator;
let secondNumber;

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

// =====================================
// UI STUFF
// =====================================