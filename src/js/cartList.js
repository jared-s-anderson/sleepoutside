import { renderListWithTemplate, getLocalStorage } from './utils.js';

export default class CartList {
    constructor (key, listElement) {
        this.key = key;
        this.listElement = listElement;
    }

    async init() {
        const list = [await getLocalStorage(this.key)];
        if (list == null){
            document.querySelector(".product-list").innerHTML = `<h2>Cart is Empty<h2>`
        }
        else{
            this.renderList(list);
        }
        
    }

    prepareTemplate(template, product) {
        console.log(product)
        template.querySelector('.cart-card__image img').src = product.Image;
        template.querySelector('.cart-card__image img').alt += product.Name;
        template.querySelector('.card__name').textContent = product.Name;
        template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
        template.querySelector('.cart-card__price').textContent += product.FinalPrice;
        return template;
    }

    renderList(list) {
        this.listElement.innerHTML = '';
        const template = document.getElementById('cart-card-template');
        // console.log(list)
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    }

}