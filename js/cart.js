let cartContainer = document.querySelector(".my-products");
let emptyUi = document.querySelector(".empty");

let products;

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
} else {
  products = productsDb;
}

let cartProducts = products.filter((e) => e.added === true);

if (cartProducts.length === 0) {
  emptyUi.style.display = "block";
}

console.log(cartProducts);

function addProducts(array) {
  let myProducts = array.map((product) => {
    return `
         <div class="product">
         <div class="img">
           <img src="${product.imgUrl}" alt="" class="product-img" />
         </div>
         <div class="desc">
         <h3 onClick="details(${product.id})" class="title">${product.title}</h3>
         <p class="price">price:${product.price}</p>
         <div class="qty">
         <i class="fa-solid fa-plus plus"></i>
         <p>${product.qty} </p>
         <i class="fa-solid fa-minus minus" ></i>
         </div>
         </div>
      
        <div class="del" onClick="remove(${product.id})"> <i class="fa-solid fa-trash-can"></i></div>
         </div>
       `;
  });
  cartContainer.innerHTML = myProducts.join("");
}
addProducts(cartProducts);

function remove(id) {
  cartProducts = cartProducts.filter((i) => i.id !== id);
  if (cartProducts.length === 0) {
    emptyUi.style.display = "block";
  }
  addProducts(cartProducts);
  products.map((i) => {
    if (i.id == id) {
      i.added = false;
      i.qty = 0;
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
}
