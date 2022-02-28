
let displayValue = '';
let aValue = 0;
let bValue = 0;
let operator = '';
let counter = 0;
let decCount = 0;
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
});

two.addEventListener('click', () => {
    displayValue += '2';
    input.textContent = displayValue;
});
three.addEventListener('click', () => {
    displayValue += '3';
    input.textContent = displayValue;
});
four.addEventListener('click', () => {
    displayValue += '4';
    input.textContent = displayValue;
});
five.addEventListener('click', () => {
    displayValue += '5';
    input.textContent = displayValue;
});
six.addEventListener('click', () => {
    displayValue += '6';
    input.textContent = displayValue;
});
seven.addEventListener('click', () => {
    displayValue += '7';
    input.textContent = displayValue;
});
eight.addEventListener('click', () => {
    displayValue += '8';
    input.textContent = displayValue;
});
nine.addEventListener('click', () => {
    displayValue += '9';
    input.textContent = displayValue;
});
zero.addEventListener('click', () => {
    displayValue += '0';
    input.textContent = displayValue;
});
div.addEventListener('click', () => {
    if (counter == 0) {
        aValue = parseFloat(displayValue);
    } else {
        aValue = divide(aValue, parseFloat(displayValue));
    }
    input.textContent = aValue;
    counter++
    decCount = 0;
    operator = '/';
    displayValue = "";
});
mul.addEventListener('click', () => {
    if (counter == 0) {
        aValue = parseFloat(displayValue);
    } else {
        aValue = multiply(aValue, parseFloat(displayValue));
    }
    input.textContent = aValue;
    counter++
    decCount = 0;
    operator = '*';
    displayValue = "";
});
plus.addEventListener('click', () => {
    if (counter == 0) {
        aValue = parseFloat(displayValue);
    } else {
        aValue = add(aValue, parseFloat(displayValue));
    }
    input.textContent = aValue;
    counter++
    decCount = 0;
    operator = '+';
    displayValue = "";
});
minus.addEventListener('click', () => {
    if (counter == 0) {
        aValue = parseFloat(displayValue);
    } else {
        aValue = subtract(aValue, parseFloat(displayValue));
    }
    input.textContent = aValue;
    counter++
    decCount = 0;
    operator = '-';
    displayValue = "";
});
clear.addEventListener('click', () => {
    displayValue = '';
    operator = '';
    counter = 0;
    aValue = 0;
    bValue = 0;
    decCount = 0;
    input.textContent = displayValue;
});
decimal.addEventListener('click', () => {
    if (decCount == 0) {
        displayValue += '.';
        input.textContent = displayValue;
    }
    decCount++
});
equals.addEventListener('click', () => {
    bValue = parseFloat(displayValue);
    console.log({bValue});
    displayValue = `${operate(aValue, operator, bValue).toPrecision(12) / 1}`;
    counter = 0;
    decCount = 0;
    input.textContent = displayValue;

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

    if (b == '/' && c == 0) {
        return "lol, no!";
    } else if (b == '+') {
        return add(a,  c);
    } else if (b == '-') {
        return subtract(a, c);
    } else if (b == '*') {
        return multiply(a, c);
    } else if (b == '/') {
        return divide(a, c);
    }


}


