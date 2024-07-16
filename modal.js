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
 const checkAccept2 = document.getElementById("checkbox2");

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
    errorBorder.Class.classList.remove("error-border");   
  }
}

//Empechement comportement par défaut "submit"
  
form.addEventListener("submit", (event) => {
event.preventDefault();  
 
  //vérification firstname 
 {let isValid = foreName.value.length >= 2;

  messageError(foreName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", isValid);}
 //verification last 
 {let isValid = lastName.value.length >= 2;
 messageError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", isValid);}
 


  //verification mail
  let emaildivElement = email.parentElement.querySelector('div');
  emaildivElement.textContent = "";
  emaildivElement.style.fontSize = "";
  emaildivElement.style.color = "";
  email.style.border = "";

  let emailRegExp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]+$/

  if (!emailRegExp.test(email.value)) {    
    emaildivElement.textContent = "Veuillez entrer une adresse mail valide."
    emaildivElement.style.fontSize = "0.5em"; 
    emaildivElement.style.color = "#e54858"; 
    email.style.border = "2px solid red";
    isValid = false;
  }


  //verification birthdate

  let birthDatedivElement = birthDate.parentElement.querySelector('div');
  birthDatedivElement.textContent = "";
  birthDatedivElement.style.fontSize = "";
  birthDatedivElement.style.color = "";
  birthDate.style.border = "";
  if (!birthDate.value) {    
    birthDatedivElement.textContent = "Vous devez entrer votre date de naissance.";
    birthDatedivElement.style.fontSize = "0.5em"; 
    birthDatedivElement.style.color = "#e54858";
    birthDate.style.border = "2px solid red";
    isValid = false;
  } else if (new Date(birthDate.value) >= new Date()) {
    birthDatedivElement.textContent = "La date de naissance doit être antérieure à aujourd'hui.";
    birthDatedivElement.style.fontSize = "0.5em";
    birthDatedivElement.style.color = "#e54858";
    birthDate.style.border = "2px solid red";
    isValid = false;
}

    //verification nombre de participation

    let quantitydivElement = quantity.parentElement.querySelector('div');
    quantitydivElement.textContent = "";
    quantitydivElement.style.fontSize = "";
    quantitydivElement.style.color = "";
    quantity.style.border = "";
    if (quantity.value < "1") {    
      quantitydivElement.textContent = "Vous devez choisir un nombre.";
      quantitydivElement.style.fontSize = "0.5em"; 
      quantitydivElement.style.color = "#e54858";
      quantity.style.border = "2px solid red";  
      
        isValid = false;
    }

     //verification lieu de participation
     
     let errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = "";
    errorMessageElement.style.fontSize = "";
    errorMessageElement.style.color = "";

     let locationSelect = false;
     for (let i = 0; i < listRadio.length; i++) {
      if (listRadio[i].checked) {
        Location = listRadio[i].value; //pour avoir la value selctionnée, affichage possible console
        locationSelect = true;
        break;
      } 
     }
     if (!locationSelect) {
      errorMessageElement.textContent = "Vous devez selectionner un lieu de participation ci-dessous.";
      errorMessageElement.style.fontSize = "0.5em";
      errorMessageElement.style.color = "#e54858";     
      isValid = false;
     }

     //verification acceptation des conditions d'utilisation
     let checkAccept1divElement = checkAccept1.parentElement.querySelector('div');
     checkAccept1divElement.textContent = "";
     checkAccept1divElement.style.fontSize = "";
     checkAccept1divElement.style.color = "";
     
     if (!checkbox1.checked) {
      checkAccept1divElement.textContent = "Vous devez accepter les conditions d'utilisation.";
      checkAccept1divElement.style.fontSize = "0.5em"; 
      checkAccept1divElement.style.color = "#e54858";
      
        isValid = false;

     }

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
  
