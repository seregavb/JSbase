'use strict'

let userNumber = prompt('Введите ТРЁХзначное число не более 999:');

function getObj(userNumber) {
    let userNumberString = String(userNumber);

    const numberToObj = {
        units: 0,
        dozens: 0,
        hundreds: 0,
    };

    if (userNumberString <= 9) {
        numberToObj.units = userNumberString[0];
        numberToObj.dozens = null;
        numberToObj.hundreds = null;

    } else if (userNumberString <= 99) {
        numberToObj.units = userNumberString[1];
        numberToObj.dozens = userNumberString[0];
        numberToObj.hundreds = null;

    } else if (userNumberString <= 999) {
        numberToObj.units = userNumberString[2];
        numberToObj.dozens = userNumberString[1];
        numberToObj.hundreds = userNumberString[0];
    } else { console.log('Вы ввели неправильное число!') };

    console.log(numberToObj);
};

getObj(userNumber);

