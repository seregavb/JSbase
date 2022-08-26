"use strict"

let a = +prompt('Введите a:');
let b = +prompt('Введите b:');
let diff = a - b;
let mult = a * b;
let summ = a + b;

if (a >= 0 && b >= 0) alert(diff)
else
    if (a < 0 && b < 0) alert(mult);
    else
        if (a < 0 && b > 0 || a > 0 && b < 0) alert(summ);
