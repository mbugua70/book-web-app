const passEl = document.querySelector("#pass-el2");
const userEl = document.querySelector("#user-el2");
const form = document.querySelector("#form-el");
const useEr = document.querySelector("#user-err");
const passEr = document.querySelector("#pass-err");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const passuser = localStorage.getItem("user");
  const userpass = JSON.parse(passuser);
  if (userpass.password === passEl.value || userpass.name === userEl.name) {
    window.open("home.html");
  } else {
    passEr.textContent = "Incorrect password";
    useEr.textContent = "Incorrect username";
  }
});
