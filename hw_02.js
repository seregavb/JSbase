'use strict'

const goodsInBasket = {

    goods: [
        {
            good: 'Трусы',
            count: 3,
            price: 500
        },

        {
            good: 'Носки',
            count: 5,
            price: 300
        },

        {
            good: 'Майка',
            count: 2,
            price: 400
        },

        {
            good: 'Галстук',
            count: 0,
            price: 1000
        },
        {
            good: 'Перчатки',
            count: 1,
            price: 500
        }
    ],

    countBasketPrice() {
        let myBasketPrice = 0;

        for (let i = 0; i < this.goods.length; i++) {
            myBasketPrice += this.goods[i].count * this.goods[i].price;
        }
        console.log('Стоимость товаров в корзине ' + ' ' + myBasketPrice);
    }
};

goodsInBasket.countBasketPrice();


