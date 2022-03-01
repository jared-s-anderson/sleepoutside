import { loadHeaderFooter } from './utils.js';

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
        alertMessage(err.message.message);
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
        document.querySelector('#login').addEventListener("click", this.login());
    }
}

const myadmin = new Admin()

myadmin.showLogin()