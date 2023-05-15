let container = document.querySelector(".my-products");
let emptyUi = document.querySelector(".empty");
let products = JSON.parse(localStorage.getItem("products")) || productsDb;

let favorites = products.filter((product) => product.liked == true);
console.log(favorites);

if (favorites.length === 0) {
  emptyUi.style.display = "block";
}

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
         </div>
        
           
        
        <div class="del"  onClick="remove(${product.id})"> <i class="fa-solid fa-trash-can"></i></div>
       </div>`;
  });
  container.innerHTML = myProducts.join("");
}
addProducts(favorites);

function remove(id) {
  favorites = favorites.filter((i) => i.id !== id);
  if (favorites.length === 0) {
    emptyUi.style.display = "block";
  }
  addProducts(favorites);
  products.map((i) => {
    if (i.id == id) {
      i.liked = false;
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
}
