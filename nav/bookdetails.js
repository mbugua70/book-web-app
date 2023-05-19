const userDiv = document.querySelector("#user");
const logoutEl = document.querySelector("#logout");
const vhEl = document.querySelector("#vehicle-id");
const rtEl = document.querySelector("#route-id");
const deleteEl = document.querySelector("#delete-el");
const editEl = document.querySelector("#edit-el");
const tableEl = document.querySelector("#tbl-el");
const tableEl2 = document.querySelector("#table-el");
const iconEl = document.querySelector("#icon-el");
const userData = localStorage.getItem("user");
const formEl2 = document.querySelector("#form-el2");

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

const vehiclesData = localStorage.getItem("vehicles");
console.log(vehiclesData);

if (vehiclesData) {
  const vehi = JSON.parse(vehiclesData);
  vhEl.textContent = vehi;
} else {
  vhEl.textContent = "no data";
}

const routeData = localStorage.getItem("route");
console.log(routeData);

if (routeData) {
  const rti = JSON.parse(routeData);
  rtEl.textContent = rti;
} else {
  rtEl.textContent = "no data";
}

deleteEl.addEventListener(
  "click",
  function () {
    localStorage.removeItem("vehicles");
    localStorage.removeItem("route");
  },
  false
);

editEl.addEventListener(
  "click",
  function () {
    tableEl.style.display = "none";
    tableEl2.innerHTML = ` <form class="formsselect" id="form-el2">
    <i class="fa-solid fa-times-circle fa-1x" id="icon-el" class="iconstyle"></i>
    <label for="number-plate">Select the vehicle number plate</label>
   <div class="selectone">
     <select id="vehicles" name="number-plate">
         <option style="margin-top:10px; padding-top: 2em;"  value="KDA678">KDA 678</option>
         <option  value="KBC988">KBC 988</option>
         <option  value="KBD244">KBD 244</option>
         <option  value="KCA489">KCA 489</option>
         <option  value="KBA300">KBA 300</option>
         <option  value="KDD789">KDD 789</option>
        </select>
   </div>
 <label for="route">Select the route</label>
<div class="selecttwo">
 <select name="route" id="route-el" class="route-style">
     <option value="mombasa">Mombasa</option>
     <option value="Naivasha">Naivasha</option>
     <option value="Nairobi">Nairobi</option>
     <option value="Nakuru">Nakuru</option>
     <option value="Nyeri">Nyeri</option>
     <option value="Embu">Embu</option>
 </select>
</div>
 <div class="buttons">
     <button type="button" id="button-el" class="buttonedt">
         save
     </button>
     <button type="button" id="button-el2" class="buttonedt>
         cancel
     </button>

 </div>
 </form>`;
  },
  false
);

iconEl.addEventListener(
  "click",
  function () {
    formEl2.style.display = "none";
    tableEl.style.display = "block";
  },
  false
);
