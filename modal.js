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
 const ListRadio = document.querySelectorAll("input[type=radio]"); // Element radio
 const CheckAccept1 = document.getElementById("checkbox1"); // Element checkbox condition d'utilisation
 const CheckAccept2 = document.getElementById("checkbox2"); // Element checkbox souhait d'informations

 const form = document.querySelector('form'); // Element form
 const error = document.querySelectorAll(".error_message"); // Element erreur
 
const modalConfirmation = document.querySelector(".modal-confirmation"); 
const modalBody = document.querySelector(".modal-body")


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
event.preventDefault();  


  let isValid = true;  //variable true pour éviter les if dans le code de vérification
  
  //vérification firstname 

  let ForeNamedivElement = ForeName.parentElement.querySelector('div');
  ForeNamedivElement.textContent = "";
  ForeNamedivElement.style.fontSize = "";
  ForeNamedivElement.style.color = "";
  ForeName.style.border = "";

  if (ForeName.value.length < 2) {    
    ForeNamedivElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom. ";
    ForeNamedivElement.style.fontSize = "0.5em"; 
    ForeNamedivElement.style.color = "#e54858"; 
    ForeName.style.border = "2px solid red";
    
    isValid = false;
  }

  //verification last 

  let LastNamedivElement = LastName.parentElement.querySelector('div');
  LastNamedivElement.textContent = "";
  LastNamedivElement.style.fontSize = "";
  LastNamedivElement.style.color = "";
  LastName.style.border = "";

  if (LastName.value.length < 2) {    
    LastNamedivElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom. "
    LastNamedivElement.style.fontSize = "0.5em"; 
    LastNamedivElement.style.color = "#e54858"; 
    LastName.style.border = "2px solid red";
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

  let BirthDatedivElement = BirthDate.parentElement.querySelector('div');
  BirthDatedivElement.textContent = "";
  BirthDatedivElement.style.fontSize = "";
  BirthDatedivElement.style.color = "";
  BirthDate.style.border = "";
  if (!BirthDate.value) {    
    BirthDatedivElement.textContent = "Vous devez entrer votre date de naissance.";
    BirthDatedivElement.style.fontSize = "0.5em"; 
    BirthDatedivElement.style.color = "#e54858";
    BirthDate.style.border = "2px solid red";
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
     for (let i = 0; i < ListRadio.length; i++) {
      if (ListRadio[i].checked) {
        Location = ListRadio[i].value; //pour avoir la value selctionnée, affichage possible console
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
     let CheckAccept1divElement = CheckAccept1.parentElement.querySelector('div');
     CheckAccept1divElement.textContent = "";
     CheckAccept1divElement.style.fontSize = "";
     CheckAccept1divElement.style.color = "";
     
     if (!checkbox1.checked) {
      CheckAccept1divElement.textContent = "Vous devez accepter les conditions d'utilisation.";
      CheckAccept1divElement.style.fontSize = "0.5em"; 
      CheckAccept1divElement.style.color = "#e54858";
      
  
      
        isValid = false;

     }

     //verification souhait information des prochains évenements

    let InfoWish = ""
    if (CheckAccept2.checked) {
      InfoWish = "ok";
    }

    //envoi formulaire si tout est valide //

  if (isValid) {
    modalBody.style.height = '800px';   //masquer et afficher modal de confirmation suivant alidation ok ou non//
    form.style.display = 'none';
    
    modalConfirmation.style.display = 'block';
    console.log("Formulaire valide")
   
  }

  //masquer et afficher modal de confirmation suivant alidation ok ou non//
  
  
});

