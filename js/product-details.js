let productsUi = document.querySelector(".product-details");
let productId = localStorage.getItem("id");
let products;

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
} else {
  products = productsDb;
}

let product = products.find((i) => i.id == productId);

productsUi.innerHTML = `
<div class="product">
<div class="img">
  <img src="${product.imgUrl}" alt="" class="product-img" />
</div>
<div class="desc">
<h3 class="title">${product.title}</h3>
  <p class="price">price:${product.price}</p>
</div>

</div>`;
