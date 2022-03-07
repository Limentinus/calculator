
// variables
let displayValue = '';
let aValue = 0;
let bValue = 0;
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
    aValue = 0;
    bValue = 0;
    output.textContent = displayValue;
});

decimal.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        ouput.textContent = displayValue;
    };
});

equals.addEventListener('click', () => {
    bValue = parseFloat(displayValue);
    console.log({bValue});
    displayValue = `${operate(aValue, operator, bValue)}`;
    output.textContent = displayValue;

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
        aValue = parseFloat(displayValue);
    } else {
        aValue = operate(aValue, operator, parseFloat(displayValue));
    }
    updateDisplay(aValue);
    displayValue = "";
    console.log(operator);
};

function updateDisplay(displayNumber) {

    if (displayNumber.toString().length < 15) {
        output.textContent = displayNumber;
    };

};