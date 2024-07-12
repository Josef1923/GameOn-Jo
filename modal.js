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
 const close = document.querySelector(".close"); // Element (X) 
 const foreName = document.getElementById("first"); // Element prénom
 const lastName = document.getElementById("last"); // Element nom
 const email = document.getElementById("email"); // Element mail
 const birthDate = document.getElementById("birthdate"); // Element birth
 const quantity = document.getElementById("quantity"); // Elemnt quantité
 const listRadio = document.querySelectorAll("input[type=radio]"); // Element radio
 const checkAccept1 = document.getElementById("checkbox1"); // Element checkbox condition d'utilisation
 const checkAccept2 = document.getElementById("checkbox2"); // Element checkbox souhait d'informations

 const form = document.querySelector('form'); // Element form
 const error = document.querySelectorAll(".error_message"); // Element erreur
 
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
  

  //Empechement comportement par défaut "submit"
  
form.addEventListener("submit", (event) => {
event.preventDefault();  


  let isValid = true;  //variable true pour éviter les if dans le code de vérification
  
  //vérification firstname 

  let foreNamedivElement = foreName.parentElement.querySelector('div');
  foreNamedivElement.textContent = "";
  foreNamedivElement.style.fontSize = "";
  foreNamedivElement.style.color = "";
  foreName.style.border = "";

  if (foreName.value.length < 2) {    
    foreNamedivElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom. ";
    foreNamedivElement.style.fontSize = "0.5em"; 
    foreNamedivElement.style.color = "#e54858"; 
    foreName.style.border = "2px solid red";
    
    isValid = false;
  }

  //verification last 

  let lastNamedivElement = lastName.parentElement.querySelector('div');
  lastNamedivElement.textContent = "";
  lastNamedivElement.style.fontSize = "";
  lastNamedivElement.style.color = "";
  lastName.style.border = "";

  if (lastName.value.length < 2) {    
    lastNamedivElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom. "
    lastNamedivElement.style.fontSize = "0.5em"; 
    lastNamedivElement.style.color = "#e54858"; 
    lastName.style.border = "2px solid red";
    isValid = false;
  }

  //verification mail

  let emaildivElement = email.parentElement.querySelector('div');
  emaildivElement.textContent = "";
  emaildivElement.style.fontSize = "";
  emaildivElement.style.color = "";
  email.style.border = "";

  let emailRegExp = /[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]/;

  if (!emailRegExp.test(email.value)) {    
    emaildivElement.textContent = "Veuillez entrer une adresse mail valide. "
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

     //verification souhait information des prochains évenements

    let InfoWish = ""
    if (checkAccept2.checked) {
      InfoWish = "ok";
    }

    //envoi formulaire si tout est valide //

  if (isValid) {
    modalBody.style.height = '800px';   //masquer et afficher modal de confirmation suivant alidation ok ou non//
    form.style.display = 'none';
    
    modalConfirmation.style.display = 'block';
    console.log("Formulaire valide")
   
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
  