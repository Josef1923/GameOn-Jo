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
  const error = document.querySelectorAll(".error_message"); // Element erreur
  
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
    event.preventDefault()  
  
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
  
  
    if (isValid) {
      console.log("Formulaire valide")
    }
  
  })
});