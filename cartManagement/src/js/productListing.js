console.log("productListing");
import { base_url,apiCalling,localStorageSetItem,getMethod} from "./function.js";

function currentItem(id) {
    console.log(id);
}

function Cart(id){
    console.log(id);
}
window.addEventListener("load", () => {
    let products = document.querySelector(".products");
    var loader = document.getElementById("loader");
 const product_listing=getMethod("products");
 const getData = async () => {
 const productListing = await product_listing;
  localStorageSetItem('allProducts',productListing.products);
    if (productListing.products.length > 0) {
        loader.style.display = "none";
    }
    productListing.products.map((product, index) => {
        return products.innerHTML += `<div class="product">
        <a> <img src="${product.thumbnail
               }" alt="" onclick=currentItem('${product.id}') class="product-img"></a>
         <div class="product-content">
         <a> <h2 class="product-title"onclick=currentItem('${product.id}')>${product.title.length > 18 ? product.title.substring(0, 80).concat("...more") : product.title
               }</h2></a>
         <h4 class="product-category">${product.category}</h4>
         <p class="product-description">${product.description.length > 20
                   ? product.description.substring(0, 80).concat("...more")
                   : product.description
               }</p>
         <div class="product-price-container">
             <h3 class="product-price">$${product.price}</h3>
            <a href="#!" data-productId="" myid = '${product.id}' onclick=Cart(${product.id}) class="add-to-cart" ><ion-icon name="cart-outline"></ion-icon></a></div>
         </div>
        </div>`
    });
  };
  getData();
  
  
});


