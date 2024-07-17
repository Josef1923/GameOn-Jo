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
 const foreName = document.getElementById("first");
 const lastName = document.getElementById("last");
 const email = document.getElementById("email"); 
 const birthDate = document.getElementById("birthdate");
 const quantity = document.getElementById("quantity"); 
 const listRadio = document.querySelectorAll("input[type=radio]");
 const checkAccept1 = document.getElementById("checkbox1");

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
  
// function de verifictaion des champs//

function messageError(inputDom, errorMessage, isValid) {
  let errorAlertClass = inputDom.parentElement.querySelector(".error_message");
  let errorBorder = inputDom.parentElement.querySelector(".text-control");
  if (!isValid) {
    errorAlertClass.textContent = errorMessage ;    
    errorBorder.classList.add("error-border");
  } else {
    errorAlertClass.textContent = "";  
    errorBorder.classList.remove("error-border");   
  }
}

//Empechement comportement par défaut "submit"
  
form.addEventListener("submit", (event) => {
event.preventDefault();  
 
//vérification firstname 
let isValid = foreName.value.length >= 2;
messageError(foreName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", isValid);
//verification last 
isValid = lastName.value.length >= 2;
messageError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", isValid);

//verification mail
let emailRegExp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+$/;
isValid = emailRegExp.test(email.value);
messageError(email, "Veuillez entrer une adresse mail valide.", isValid);

//verification birthdate
if (!birthDate.value) {  
  messageError(birthDate, "Veuillez entrer votre date de naissance.");
} else if (new Date(birthDate.value) >= new Date()) {  
  messageError(birthDate, "La date de naissance ne peut pas être dans le futur.");
} else {  
  isValid = true;
  messageError(birthDate, "", isValid);
}

//verification nombre de participations
let nombreEntier = parseInt(quantity.value) >= 1;
let nombreSansVirgule = /^\d+$/.test(quantity.value);

if (!nombreEntier) {
  messageError(quantity, "Vous devez saisir un nombre.");
} else if (!nombreSansVirgule) {
  messageError(quantity, "Vous ne pouvez pas saisir un nombre à virgule.");
} else {
  isValid = true;
  messageError(quantity, "",isValid);
}

//Vérification du lieu de participation

//verification acceptation des conditions d'utilisation
isValid = checkbox1.checked;
messageError(checkbox1, "Veuillez accepter les conditions d'utilisation.", isValid);


    //envoi formulaire si tout est valide //

  if (isValid) {
    modalBody.style.height = '800px';   //masquer et afficher modal de confirmation suivant alidation ok ou non//
    form.style.display = 'none';    
    modalConfirmation.style.display = 'block';   
  }  
});

//fermeture modal//
closeInscription.addEventListener("click", closeConfirmationModal);

function closeConfirmationModal() {
  modalBg.style.display = "none";
  modalConfirmation.style.display = 'none';
  form.style.display = 'block';
  form.reset();
  modalBody.style.height = '';
}
  
