'use strict'

let a = +prompt('Введите число a:');
let b = +prompt('Введите число b:');

let resultSum = getSum(a, b);
alert('Сумма' + ' ' + a + ' и ' + b + ' = ' + resultSum);

let resultDiff = getDiff(a, b);
alert('Разность' + ' ' + a + ' и ' + b + ' = ' + resultDiff);

let resultMult = getMult(a, b);
alert('Произведение' + ' ' + a + ' и ' + b + ' = ' + resultMult);

let resultDiv = getDiv(a, b);
alert('Частное' + ' ' + a + ' и ' + b + ' = ' + resultDiv);



function getSum(a, b) {
    return a + b;
}

function getDiff(a, b) {
    return a - b;
}

function getMult(a, b) {
    return a * b;
}

function getDiv(a, b) {
    return a / b;
}


