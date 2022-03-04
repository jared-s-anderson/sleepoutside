import { loadHeaderFooter } from './utils.js';
import ExternalServices from './ExternalServices.js';

loadHeaderFooter();

export default class Admin {
    constructor(outputSelector) {
        this.mainElement = document.querySelector(outputSelector);
        this.token = null;
        this.services = new ExternalServices();
      }
      async login(creds, next) {
      // I built the login method with a callback: next. 
      // This makes it much more flexible...
      // there could be many different things the user wants to do after logging in...
      // this allows us that flexibility without having to write a bunch of login methods
      try {
        this.token = await this.services.loginRequest(creds);
        next()
      } 
      catch(err) {
        // remember this from before?
        console.log(err);
      }
    }
    showLogin(){
        console.log("We made it to here.")
        document.querySelector('main').innerHTML = `<section id="login-section" class="products">
        <form action="">
            <legend>Master Login to the Internet</legend>
            <label>Email</label><input type="email" name="email" autocomplete="off">
            <label>Password</label><input type="password" name="password" autocomplete="off">
            <button id="login" type="submit">Login</button>
        </form>        
        </section>`;
        document.querySelector('#login').addEventListener("click", (e) => {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            this.login({email, password}, this.showOrders.bind(this));
        });
    }

    async showOrders() {
        console.log('Did we make it here')
        try {
          const orders = await this.services.getOrdersFromServer(this.token);
          this.mainElement.innerHTML = orderHtml();
          const parent = document.querySelector('#orders tbody');
          // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
          parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString('en-US')}</td><td>${order.items.length}</td><td>${order.orderTotal}</td></tr>`).join('');
        } catch(err) {
          console.log(err);
        }
      }

      
}

function orderHtml() {
    return `<h2>Current Orders</h2>
    <table id="orders">
    <thead>
    <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
    </thead>
    <tbody class="order-body"></tbody>
    </table>
    `;
  }

const myadmin = new Admin()

myadmin.showLogin()