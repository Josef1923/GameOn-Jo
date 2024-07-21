// Ajout listener pour la navbar telephone
document.querySelector('.icon').addEventListener('click', editNav);

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 // DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM Rajoutés projet
const close = document.querySelector(".close");
const form = document.querySelector('form');
const error = document.querySelectorAll(".error_message"); 
const modalConfirmation = document.querySelector(".modal-confirmation"); 
const modalBody = document.querySelector(".modal-body");
const closeInscription = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}
//close modal event Josef
close.addEventListener("click", closeModal);
//close modal form Josef
function closeModal() {
  modalBg.style.display = "none";
}

//fermeture modal suite confirmation inscription//
closeInscription.addEventListener("click", closeConfirmationModal);
function closeConfirmationModal() {
  modalBg.style.display = "none";
  modalConfirmation.style.display = 'none';
  form.style.display = 'block';
  form.reset();
  modalBody.style.height = '';
}



