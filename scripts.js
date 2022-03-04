
// variables
let displayValue = '';
let aValue = 0;
let bValue = 0;
let operator = '';
let counter = 0;
let decCount = 0;


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
        displayValue += button.innerText;
        output.textContent = displayValue;
    });
;
});

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.innerText;
        opButton();
    })
})

clear.addEventListener('click', () => {
    displayValue = '';
    operator = '';
    counter = 0;
    aValue = 0;
    bValue = 0;
    decCount = 0;
    output.textContent = displayValue;
});

decimal.addEventListener('click', () => {
    if (decCount == 0) {
        displayValue += '.';
        output.textContent = displayValue;
    }
    decCount++
});

equals.addEventListener('click', () => {
    bValue = parseFloat(displayValue);
    console.log({bValue});
    displayValue = `${operate(aValue, operator, bValue)}`;
    counter = 0;
    decCount = 0;
    output.textContent = displayValue;

    console.log({displayValue});

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


}

function opButton() {
    if (counter == 0) {
        aValue = parseFloat(displayValue);
    } else {
        aValue = operate(aValue, operator, parseFloat(displayValue));
    }
    output.textContent = aValue;
    counter++
    decCount = 0;
    displayValue = "";

}
