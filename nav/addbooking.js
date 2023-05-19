const vhbookEl = document.querySelector("#vehicles");
const rtbookEl = document.querySelector("#route-el");
const buttonEl = document.querySelector("#button-el");

buttonEl.addEventListener(
  "click",
  function () {
    const vehicles = vhbookEl.value;
    const route = rtbookEl.value;
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
    localStorage.setItem("route", JSON.stringify(route));
    alert("your booking has been submitted");
  },
  false
);
