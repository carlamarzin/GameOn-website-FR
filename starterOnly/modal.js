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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal event 
const closeButton = document.querySelector(".close"); 
const closeButtonSuccess = document.querySelector(".btn-close");

closeButton.addEventListener('click', closeModal);
closeButtonSuccess.addEventListener('click', closeModal);

// close modal form 
function closeModal() {                     
  modalbg.style.display = 'none';
}


// form validation : création des variables
var form = document.getElementById("form");

const prenom = document.getElementById("first");
var prenomInvalide = document.getElementById("prenomInvalide");

var nom = document.getElementById("last"); 
var nomInvalide = document.getElementById("nomInvalide");

var email = document.getElementById("email");
var emailInvalide = document.getElementById("emailInvalide"); 

var DOB = document.getElementById("birthdate");
var DOBYear = DOB.getFullYear();
var DOBInvalide = document.getElementById("DOBInvalide");

var tournois = document.getElementById("quantity");
var tournoisValide = document.getElementById("tournoisInvalide");

var ville = document.getElementsByClassName("checkbox-input")
var villeInvalide = document.getElementById("villeInvalide");

var CGU = document.getElementById("checkbox1");
var CGUInvalide = document.getElementById("CGUInvalide");



//validation du prénom 
function validationPrenom(){
  if (prenom.validity.valueMissing){
    prenomInvalide.textContent = "Il vous faut renseigner votre prénom";
    prenom.className = 'text-control error';
    return false;
  }else if (prenom.value.length < 2){
    prenomInvalide.textContent = "Il vous faut entrer au minimum 2 caractères";
    prenom.className = 'text-control error';
    return false; 
  }else{
    prenomInvalide.textContent = "";
    prenom.className = "text-control"
    return true;
  }
}

//validation du nom
function validationNom(){
  if (nom.validity.valueMissing){
    nomInvalide.textContent = "Vous devez renseigner votre nom";
    nom.className = 'text-control error';
    return false;
  }else if (nom.value.length < 2){
    nomInvalide.textContent = "Il vous faut entrer au minimum 2 caractères";
    nom.className = 'text-control error';
    return false; 
  }else{
    nomInvalide.textContent = "";
    nom.className = 'text-control';
    return true;
  }
}

//validation de l'email
function validationEmail(){
  if (email.validity.valueMissing){
    emailInvalide.textContent = "Il vous faut renseigner votre adresse email";
    email.className = 'text-control error';
    return false;
  }else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,10}$/g.test(email.value)){
    emailInvalide.textContent = "L'adresse email est invalide";
    email.className = 'text-control error';
    return false;
  }else{
    emailInvalide.textContent = "";
    email.className = 'text-control';
    return console.log(DOB);
  }
}



//validation de la date de naissance 
function validationDOB(){
  if(DOB.validity.valueMissing){
    DOBInvalide.textContent = "Il vous faut renseigner votre date de naissance";
    DOB.className = 'text-control error';
    return false;
  }else if(DOBYear < 1920 || DOBYear >= 2021){
    DOBInvalide.textContent = "Il vous faut renseigner une date de naissance valide";
    DOB.className = 'text-control error';
    return false;
  }else{
    DOBInvalide.textContent = "";
    DOB.className = 'text-control';
    return true;
  }
}


//validation des tournois 
function validationTournois(){
  if (tournois.validity.valueMissing){
    tournoisInvalide.textContent = "Il vous faut renseigner un nombre de tournois";
    tournois.className = 'text-control error';
    return false;
  }else{
    tournoisInvalide.textContent = "";
    tournois.className = 'text-control';
    return true;
  } 
}

//validation des CGU 
function validationCGU(e){
  if (CGU.checked){
    CGUInvalide.textContent = "";
    return true;
  }else{
    CGUInvalide.textContent = "Il vous faut accepter les conditions d'utilisation";
    return false;
  } 
}

//vérification générale de tous les champs 
function validationGenerale(e){
  e.preventDefault();

  //vérifier la validité de chaque champs
  let prenomValide = validationPrenom();
  let nomValide = validationNom(); 
  let emailValide = validationEmail();
  let DOBValide = validationDOB();
  let tournoisValide = validationTournois();
  let CGUValide = validationCGU();

  //vérifier que tous les champs sont valides, AINSI le formulaire sera valide
  let formulaireValide = prenomValide && nomValide && emailValide && DOBValide && tournoisValide && CGUValide;
  if (formulaireValide){
    e.preventDefault();
    //affichage du message de validation (remplacer le contenu de la modale, par un message de validation)
    let formulaire = document.getElementById("form");
    formulaire.style.display = "none";
    let modalSuccess = document.getElementById("content-success");
    modalSuccess.style.display = "flex";
  }else{
    return false;
  }
}

//Ecouter l'évènement click sur le bouton submit, pour valider ou non le formulaire
const validation = document.querySelector(".btn-submit");
validation.addEventListener("click", validationGenerale)