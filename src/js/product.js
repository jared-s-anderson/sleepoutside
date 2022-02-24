import ExternalServices from "./ExternalServices.js";
import ProductDetails from "./productDetails.js";
import { getParams } from "./utils.js";

const productId = getParams("product");
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();



