'use strict'

let a = +prompt('Введите число a:');
let b = +prompt('Введите число b:');
let operation = prompt('Операция (+, -, *, /):');

alert(mathOperation(a, b, operation));

function mathOperation(a, b, operation) {
    switch (a, b, operation) {
        case (operation = '+'):
            return a + b;
            break;

        case (operation = '-'):
            return a - b;
            break;

        case (operation = '*'):
            return a * b;
            break;

        case (operation = '/'):
            return a / b;
            break;

        default:
            alert('Неправильная операция!');
    }
}



