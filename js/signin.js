let usersArray;
let userName = document.querySelector(".name");
let pinCode = document.querySelector(".pin");
let signForm = document.querySelector(".signform");
let infoName = document.querySelector(".user-name span");

if (localStorage.getItem("users")) {
  usersArray = JSON.parse(localStorage.getItem("users"));
}
console.log(usersArray);

userName.focus();

signForm.onsubmit = (e) => {
  e.preventDefault();
  if (usersArray) {
    let user = usersArray.find(
      (i) => i.username === userName.value && i.pin === pinCode.value
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      setTimeout(() => {
        window.location = "home.html";
      }, 1000);
    } else {
      alert("You Dont Have An Account");
      setTimeout(() => {
        window.location = "register.html";
      }, 500);
    }
  } else {
    alert("You Dont Have An Account");
    setTimeout(() => {
      window.location = "register.html";
    }, 500);
  }

  signForm.reset();
};
