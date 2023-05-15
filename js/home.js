let allProducts = document.querySelector(".my-products");
let productId = localStorage.getItem("id");
let dropDown = document.querySelector(".drop-menu");
let dropDiv = document.querySelector(".drop-div");
let badge = document.querySelector(".badge");

let products;
let cartProducts;

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
} else {
  products = productsDb;
}

if (localStorage.getItem("cartProducts")) {
  cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

  menuUi();
}

let cartIcon = document.querySelector(".cart");
cartIcon.addEventListener("click", () => {
  dropDiv.classList.toggle("show");
});

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
       <div class="actions">
          <i class="fa-solid fa-cart-plus add" onClick=addCart(${
            product.id
          })></i>
          <i  class= "${
            product.liked == true
              ? "fa-solid fa-heart-circle-check fav"
              : "fa-regular fa-heart fav"
          }" onClick=addFav(${product.id}) ></i>
      </div>
     </div>`;
  });
  allProducts.innerHTML = myProducts.join("");
}
addProducts(products);

function details(id) {
  localStorage.setItem("id", id);
  window.location = "product-details.html";
}

function addFav(id) {
  if (user) {
    products.map((product) => {
      if (product.id == id) {
        if (product.liked === true) {
          product.liked = false;
        } else {
          product.liked = true;
        }
      }
    });

    localStorage.setItem("products", JSON.stringify(products));
    addProducts(products);
  } else {
    setTimeout(() => {
      window.location = "signin.html";
    }, 500);
  }
}

function addCart(id) {
  if (user) {
    products.map((i) => {
      if (i.id == id) {
        i.added = true;
        i.qty += 1;
      }
    });

    localStorage.setItem("products", JSON.stringify(products));
    products = JSON.parse(localStorage.getItem("products"));
    menuUi();
  } else {
    setTimeout(() => {
      window.location = "signin.html";
    });
  }
}

function menuUi() {
  badge.style.display = "block";

  dropDown.innerHTML = "";

  cartProducts = products.filter((e) => e.added === true);

  badge.innerHTML = cartProducts.length;

  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  cartProducts.forEach((element) => {
    if (element.added === true) {
      li = document.createElement("li");
      p = document.createElement("p");
      p.innerHTML = element.title;
      span = document.createElement("span");
      span.innerHTML = element.qty;
      p.appendChild(span);
      li.appendChild(p);
      dropDown.prepend(li);
    }
  });
}
