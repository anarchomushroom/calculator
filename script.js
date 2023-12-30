// VARIABLES
let previousNumber;
let currentOperator = null;
let currentNumber = "";

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals-btn");
const decimalButton = document.getElementById("decimal-btn");
const currentOperand = document.querySelector(".currentOperand");
const previousOperand = document.querySelector(".previousOperand");

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

// button functions

function operate(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "x":
            return multiply(num1, num2)
        case "/":
            if (num2 === 0) {
                return null
            } else {
                return divide(num1, num2)
            }
        default:
            return null
    }
};

function setOperator(operator) {
    if (currentOperator !== null) {
        evaluate();
        currentOperator = operator;
        return;
    };

    previousNumber = currentNumber;
    currentOperator = operator;
    currentNumber = "";
};

function setNumber(number) {
    currentNumber += number;
    currentOperand.textContent = currentNumber;
}

// other functions
function evaluate() {
    previousNumber = operate(previousNumber, currentOperator, currentNumber);
    currentOperand.textContent = previousNumber;
    
    currentNumber = "";
    currentOperator = null;
}

// =======================================
// UI stuff
// =======================================

numberButtons.forEach(btn => {
    btn.addEventListener("click", () => setNumber(btn.textContent))
});

operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => setOperator(btn.textContent))
});

equalsButton.addEventListener("click", () => evaluate());