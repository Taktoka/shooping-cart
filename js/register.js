let userName = document.querySelector(".name");
let email = document.querySelector(".mail");
let pin = document.querySelector(".pin");
let rePin = document.querySelector(".re-pin");
let regForm = document.querySelector(".register-form");

let users = [];

userName.focus();

if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

regForm.onsubmit = (e) => {
  e.preventDefault();
  if (userName.value !== "" && email.value !== "" && pin.value !== "") {
    let user = {
      username: userName.value,
      email: email.value,
      pin: pin.value,
    };

    users.push(user);
    console.log(users);

    localStorage.setItem("users", JSON.stringify(users));

    setTimeout(() => {
      window.location = "signin.html";
    }, 500);
    regForm.reset();
  } else {
    alert("fields empty");
  }
  regForm.reset();
};
