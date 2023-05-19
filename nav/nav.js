const form = document.querySelector("#signup");
const nameEl = document.querySelector("#user-el1");
const emailEl = document.querySelector("#user-email1");
const submitEl = document.querySelector("#button-el1");
const conpassEl = document.querySelector("#conpass-el");
const passEl = document.querySelector("#pass-el1");
const errEl = document.querySelector("#error-el");

form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    window.open("sign.html");
    console.log(emailEl.value);
    const user = {
      name: nameEl.value,
      email: emailEl.value,
      password: passEl.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    nameEl.value = "";
    emailEl.value = "";
    conpassEl.value = "";
    passEl.value = "";
  },

  false
);

conpassEl.addEventListener(
  "keyup",
  function () {
    const passone = passEl.value;
    const passtwo = conpassEl.value;
    console.log(passEl.value);
    console.log(conpassEl.value);
    if (passone === passtwo) {
      errEl.style.display = "none";
      form.disabled = false;
    } else {
      errEl.style.display = "block";
      form.disabled = true;
      errEl.style.opacity = "1";
    }
  },
  false
);

console.log(localStorage);
