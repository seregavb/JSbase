'use strict'

const cart = {

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

    countCartPrice() {
        let cartPrice = 0;
        let goodsCount = 0;

        for (let i = 0; i < this.goods.length; i++) {
            cartPrice += this.goods[i].count * this.goods[i].price;
        };

        this.goods.forEach((goods) => {
            goodsCount += goods.count
        });

        if (goodsCount != 0) {
            const cartPriceOut = document.querySelector('.cartItem');
            cartPriceOut.insertAdjacentHTML('afterend', 'Стоимость товаров в корзине ' + ' ' + cartPrice + '<br>' + 'Стоимость товаров в корзине ' + ' ' + goodsCount);
            // console.log('Стоимость товаров в корзине ' + ' ' + cartPrice);
            // console.log('Количество товаров в корзине ' + ' ' + goodsCount);
        } else {
            cartPriceOut.insertAdjacentHTML('afterend', 'Ваша корзина пуста!');
            // console.log('Ваша корзина пуста!')
        };

        return cartPrice;
    },

    printCart() {
        const divCart = document.querySelector('.cart');
        divCart.insertAdjacentHTML('afterbegin', '<h1>Корзина</h1>');


        const div = document.createElement('div');
        div.className = "cartItem";
        document.body.insertAdjacentElement('beforeend', div);

        for (let i = 0; i < this.goods.length; i++) {
            div.insertAdjacentHTML('beforeend', 'Товар ' + [i + 1] + ': ' + this.goods[i].good + '<br>' + ' В количестве: ' + this.goods[i].count + ' На сумму: ' + this.goods[i].count * this.goods[i].price + '<br> <br>')
        };
    },

};

cart.printCart();
cart.countCartPrice();


