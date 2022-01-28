import { renderListWithTemplate } from './utils.js';

export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        // this.productList = {}
    }

    async init(){
        const productList = await this.dataSource.getData();
        console.log(productList);
        const filteredProductList = productList.filter(product => product.Id == '880RR' || product.Id == '985RF' || product.Id == '985PR' || product.Id == '344YJ')
        this.renderList(filteredProductList);
    }

    prepareTemplate(template, product) {
        
        template.querySelector('a').href +=  product.Id;
        template.querySelector('img').src = product.Image;
        template.querySelector('img').alt += product.Name;
        template.querySelector('.card__brand').textContent = product.Brand.Name;
        template.querySelector('.card__name').textContent = product.NameWithoutBrand;
        template.querySelector('.product-card__price').textContent += product.FinalPrice;  
        return template;
    }

    renderList(list) {
        //get the template
        const template = document.getElementById('product-card-template');
        console.log(template)
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
        
      }

    

}