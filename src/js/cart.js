import { loadHeaderFooter } from './utils.js';
import CartList from './cartList.js';

loadHeaderFooter();

const cart = new CartList('so-cart', document.querySelector('.product-list'));
cart.init();

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}


function getCartContents() {
  let markup = '';
  const cartItems = getLocalStorage('so-cart');
  // const htmlItems = cartItems.map((item) => renderCartItem(item));
  // document.querySelector('.product-list').innerHTML = htmlItems.join('');
  if (cartItems != null){
    document.querySelector(".product-list").innerHTML = renderCartItem(cartItems);
  }
  else{
    document.querySelector(".product-list").innerHTML = `<h2>Cart is Empty<h2>`
  }
}

function renderCartItem(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  console.log(newItem);
  return newItem;
}

// getCartContents();

