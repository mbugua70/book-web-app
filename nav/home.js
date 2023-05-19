const userDiv = document.querySelector("#user");
const logoutEl = document.querySelector("#logout");

const userData = localStorage.getItem("user");
if (userData) {
  const user = JSON.parse(userData);
  console.log(user.name);
  const elText = `<p class="user-para"><span class="user-name"><span class="padding">Name:</span>${user.name}</span><span class="user-email"><span class="padding">Email:</span>${user.email}</span></p>`;
  userDiv.innerHTML = elText;
} else {
  userDiv.innerHTML = "<p>No user data found</p>";
}

logoutEl.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    localStorage.removeItem("authToken");
    window.open("sign.html");
  },
  false
);
