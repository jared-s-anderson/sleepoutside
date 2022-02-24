import ExternalServices from './ExternalServices.js';
import ProductList from './productList.js';
import { loadHeaderFooter, getParams } from './utils.js';

loadHeaderFooter();



const category = getParams('category');

const dataSource = new ExternalServices();

const listElement = document.querySelector('.product-list');

const productList = new ProductList(category, dataSource, listElement);
productList.init()

let categoryTitle = `${category}`;
if (categoryTitle === 'tents') {
    categoryTitle = 'Tents';
} else if (categoryTitle === 'sleeping-bags') {
    categoryTitle = 'Sleeping Bags';
} else if (categoryTitle === 'backpacks') {
    categoryTitle = 'Backpacks';
} else if (categoryTitle === 'hammocks') {
    categoryTitle = 'Hammocks';
}

document.getElementById('title').innerHTML = `Top Products: ${categoryTitle}`;