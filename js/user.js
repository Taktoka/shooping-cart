let infoList = document.querySelector(".user-info");
let links = document.querySelector(".ul-links");
let logOut = document.querySelector(".log-out");
let allproducts = JSON.parse(localStorage.getItem("products")) || productsDb;
let userFav = allproducts.filter((product) => product.liked == true);
let cartItems = allproducts.filter((e) => e.added === true);

let user;

if (localStorage.getItem("user")) {
  user = JSON.parse(localStorage.getItem("user"));
  document.querySelector(".user-name span").innerHTML = user.username;
  if (user) {
    infoList.style.display = "flex";
    links.style.display = "none";
  } else {
    infoList.style.display = "none";
    links.style.display = "flex";
  }
}

logOut.addEventListener("click", (e) => {
  localStorage.removeItem("products");
  localStorage.removeItem("user");
  setTimeout(() => {
    window.location = "signin.html";
  });
});
