'use strict'

let easyNumbers = [2];
let result = '2';
let easyNumber;
let i = 3;
let j;

while (i <= 100) {
    easyNumber = true;
    j = 0;
    while (j < easyNumbers.length) {
        if (!(i % easyNumbers[j])) {
            easyNumber = false;
        }
        j++;
    }
    if (easyNumber) {
        easyNumbers.push(i);
        result += ' ' + i;
    }
    i++;
}
console.log(result);