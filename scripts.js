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