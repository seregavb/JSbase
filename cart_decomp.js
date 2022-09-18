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

    countCartPrice() { //Подсчет СТОИМОСТИ товаров в корзине
        let cartPrice = 0;

        for (let i = 0; i < this.goods.length; i++) {
            cartPrice += this.goods[i].count * this.goods[i].price;
        };
        return cartPrice;
    },

    countCartGoods() { //Подсчёт КОЛИЧЕСТВА товаров в корзине
        let goodsCount = 0;
        this.goods.forEach((goods) => {
            goodsCount += goods.count
        });
        return goodsCount;
    },

    printCart() { //Вывод корзины
        const divCart = document.querySelector('.cart');
        divCart.insertAdjacentHTML('afterbegin', '<h1>Корзина</h1>');

        if (this.countCartGoods() != 0) { // Если в корзине есть товары

            const div = document.createElement('div');
            div.className = "cartItem";
            document.body.insertAdjacentElement('beforeend', div);

            for (let i = 0; i < this.goods.length; i++) {
                div.insertAdjacentHTML('beforeend', 'Товар ' + [i + 1] + ': ' + this.goods[i].good + '<br>' + ' В количестве: ' + this.goods[i].count + ' На сумму: ' + this.goods[i].count * this.goods[i].price + '<br> <br>')
            };

            const cartPriceOut = document.querySelector('.cartItem');
            cartPriceOut.insertAdjacentHTML('afterend', 'Стоимость товаров в корзине ' + ' ' + this.countCartPrice() + '<br>' + 'Количество товаров в корзине ' + ' ' + this.countCartGoods());
        } else { // Если корзина пуста
            const div = document.createElement('div');
            div.className = "cartItem";
            document.body.insertAdjacentElement('beforeend', div);

            const cartPriceOut = document.querySelector('.cartItem');
            cartPriceOut.insertAdjacentHTML('afterend', 'Ваша корзина пуста!');
        };
    },

};

cart.printCart();
cart.countCartPrice();


