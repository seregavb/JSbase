'use strict'

let val = +prompt('Введите число:');
let pow = +prompt('Введите степень:');

alert(getDegree(val, pow));

function getDegree(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * getDegree(val, pow - 1);
    }
}
