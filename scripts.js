
let displayValue = '';
// query selectors
const input = document.getElementById('input');
const output = document.getElementById('output');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const div = document.getElementById('divide');
const mul = document.getElementById('multiply');
const plus = document.getElementById('add');
const minus = document.getElementById('subtract');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

// event listeners

one.addEventListener('click', () => {
    displayValue += '1';
    input.textContent = displayValue;
    console.log(displayValue);
});

two.addEventListener('click', () => {
    displayValue += '2';
    input.textContent = displayValue;
    console.log(displayValue);
});
three.addEventListener('click', () => {
    displayValue += '3';
    input.textContent = displayValue;
    console.log(displayValue);
});
four.addEventListener('click', () => {
    displayValue += '4';
    input.textContent = displayValue;
    console.log(displayValue);
});
five.addEventListener('click', () => {
    displayValue += '5';
    input.textContent = displayValue;
    console.log(displayValue);
});
six.addEventListener('click', () => {
    displayValue += '6';
    input.textContent = displayValue;
    console.log(displayValue);
});
seven.addEventListener('click', () => {
    displayValue += '7';
    input.textContent = displayValue;
    console.log(displayValue);
});
eight.addEventListener('click', () => {
    displayValue += '8';
    input.textContent = displayValue;
    console.log(displayValue);
});
nine.addEventListener('click', () => {
    displayValue += '9';
    input.textContent = displayValue;
    console.log(displayValue);
});
zero.addEventListener('click', () => {
    displayValue += '0';
    input.textContent = displayValue;
    console.log(displayValue);
});
div.addEventListener('click', () => {
    displayValue += '÷';
    input.textContent = displayValue;
    console.log(displayValue);
});
mul.addEventListener('click', () => {
    displayValue += '×';
    input.textContent = displayValue;
    console.log(displayValue);
});
plus.addEventListener('click', () => {
    displayValue += '+';
    input.textContent = displayValue;
    console.log(displayValue);
});
minus.addEventListener('click', () => {
    displayValue += '−';
    input.textContent = displayValue;
    console.log(displayValue);
});
clear.addEventListener('click', () => {
    displayValue = '';
    input.textContent = displayValue;
    console.log(displayValue);
});
decimal.addEventListener('click', () => {
    displayValue += '.';
    input.textContent = displayValue;
    console.log(displayValue);
});


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, c) {
    switch (b) {
    case '+':
        console.log(add(a, c));
        break;
    case '-':
        console.log(subtract(a, c));
        break;
    case '*':
        console.log(multiply(a, c));
        break;
    case '/':
        console.log(divide(a, c));
        break;
    default:
        console.log("I can't do that")
    }
}