function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM Rajoutés projet
const close = document.querySelector(".close"); // Element (X) 
const ForeName = document.getElementById("first"); // Element prénom
const LastName = document.getElementById("last"); // Element nom
const email = document.getElementById("email"); // Element mail
const BirthDate = document.getElementById("birthdate"); // Element birth
const quantity = document.getElementById("quantity"); // Elemnt quantité

const form = document.querySelector('form'); // Element form


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//close modal event Josef
close.addEventListener("click", closeModal);

//close modal form Josef
function closeModal() {
  modalbg.style.display = "none";
}


//Empechement comportement par défaut "submit"

form.addEventListener("submit", (event) => {
  event.preventDefault();;
});