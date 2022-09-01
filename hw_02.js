'use strict'

let myBasket = [
    ['Трусы', 3, 500],
    ['Носки', 5, 300],
    ['Майка', 2, 400],
    ['Галстук', 0, 1000],
    ['Перчатки', 1, 500],
]

console.log(myBasket);
countBasketPrice();

function countBasketPrice() {
    let myBasketPrice = 0;

    for (let i = 0; i < myBasket.length; i++) {
        myBasketPrice += myBasket[i][1] * myBasket[i][2];
    }
    console.log('Стоимость товаров в корзине' + ' ' + myBasketPrice);
}


