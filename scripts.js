
// variables
let displayValue = '';
let firstOperand = 0;
let secondOperand = 0;
let operator = '';


// query selectors
const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]')
const output = document.getElementById('output');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

// event listeners
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (displayValue.toString().length < 15) {
            displayValue += button.innerText;
        };
        console.log({displayValue});
        updateDisplay(displayValue);
    });
;
});

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        opButton();
        operator = button.innerText;
    })
})

clear.addEventListener('click', () => {
    displayValue = '';
    operator = '';
    firstOperand = 0;
    secondOperand = 0;
    updateDisplay(displayValue);
});

decimal.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay(displayValue);
    };
});

equals.addEventListener('click', () => {
    secondOperand = parseFloat(displayValue);
    console.log({secondOperand});
    displayValue = `${operate(firstOperand, operator, secondOperand)}`;
    updateDisplay(displayValue);

})

// functions
function add(a, b) {
    return (a + b);
}
function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (b == 0) {
        return "lol, no!";
    } else {
    return (a / b);
    }
}


function operate(a, b, c) {

    if (b == '÷' && c == 0) {
        return "lol, no!";
    } else if (b == '+') {
        return add(a,  c);
    } else if (b == '−') {
        return subtract(a, c);
    } else if (b == '×') {
        return multiply(a, c);
    } else if (b == '÷') {
        return divide(a, c);
    }


};

function opButton() {
    if (operator == '') {
        firstOperand = parseFloat(displayValue);
    } else {
        firstOperand = operate(firstOperand, operator, parseFloat(displayValue));
    }
    updateDisplay(firstOperand);
    displayValue = "";
    console.log(operator);
};

function updateDisplay(displayNumber) {

    if (displayNumber.toString().length < 15) {
        output.textContent = displayNumber;
    };

};