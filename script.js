// Star-rating
// Select all the elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");
// Loop trough the "stars" NodeList

let curentRating = document.querySelector('.currentRating')
let curentStarLevel = 0;
stars.forEach((star, index1) => {
  // Add an event listener that runs when the click "event" is triggered 

  star.addEventListener('click', () => {

    curentStarLevel = index1 + 1;
    curentRating.innerText = `${curentStarLevel} sur 5`;

    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {

      //   Add the "active" class to the clicked star and any stars with a lower index 
      // and remove the "active" class form any stars with a higher index
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

let submitButton = document.getElementById("submitButton");
// let commentsArea = document.getElementById('comments-area');
let formArea = document.getElementById("form-area");

submitButton.addEventListener("click", () => {
  // 1 get the values
  let inputForm = document.getElementById('form-textarea').value;
  let messageError = document.getElementById('message-error');
  let starLevel = curentRating;

  if (inputForm === '') {
    return messageError.innerHTML = 'Le champ doit être rempli'
  } else {
    messageError.innerHTML = '';
  }
  // 2 create elements
  let commentArea = document.createElement('div');
  let commentValue = document.createElement('p');
  commentValue.innerHTML = `&#11088  ${curentStarLevel} / 5 <br> ${inputForm}`;

  // let curentRating=document.createElement('div')
  // curentRating.innerText=`${curentRating}`;

  // 3 add a class
  commentArea.classList.add('comments-area');
  commentValue.classList.add('comment-value');
  // inputForm.classList.add('comment-value');


  // 4 specify the dependency of the sections
  formArea.appendChild(commentArea).appendChild(commentValue);
});

////////////// NAVBAR OPACITY ////////////////////

const navbar = document.querySelector(".nav");
let timeOut;
window.addEventListener("scroll", () => {
  if (navbar.classList.contains("nav-opacity")) {
    clearTimeout(timeOut);
  } else {
    navbar.classList.add("nav-opacity");
  }
  timeOut = setTimeout(() => navbar.classList.remove("nav-opacity"), 400);
});
// Explications : au scroll event, si la navbar n'a pas la classe nav-opacity,
//  on l'ajoute. Puis on rajoute un timeout pour enlever la classe après un temps imparti.
//  Entre temps, si on scroll encore, mais que le temps n'est pas encore imparti
//  (donc la navbar possède toujours la classe nav-opacity), on clear le timeout pour l'empêcher
//  de supprimer la classe, et on le relance.

////////////// POUR AFFICHER LA DATE ////////////////////

// Récupérer l'élément HTML pour le champ de date
const dateInput = document.getElementById("date");
// Ajouter un écouteur d'événements sur le champ de date pour détecter les changements de valeur
dateInput.addEventListener("change", () => {
  // Récupérer la valeur sélectionnée
  const selectedDate = dateInput.value;
  // Inverser la date sélectionnée
  const reversedDate = selectedDate.split("-").reverse().join("/");
  // Afficher la date sélectionnée dans un élément HTML
  const result = document.getElementById("result");
  result.innerHTML = `Vous avez sélectionné cette date : ${reversedDate}`;
});

/////////////// FORMULAIRE DE CONTACT ////////////////////

const submitButtonForm = document.getElementById("submitButtonForm");
const erreurForm = document.getElementById("erreurForm");

submitButtonForm.addEventListener("click", (e) => {

  const inputNameForm = document.getElementById("inputNameForm").value;
  const inputEmailForm = document.getElementById("inputEmailForm").value;
  if (inputNameForm === "" || inputEmailForm === "") {
    e.preventDefault();
    erreurForm.innerHTML = "veuillez renseigner tous les champs";
  } else {
    e.preventDefault();
    alert(`Bonjour ${inputNameForm}, \n Votre reservation à bien été prise en compte. \nVous allez recevoir une confirmation à l'adresse suivante : \n ${inputEmailForm}`);
  }
});

//////////// ANIMATIONS ///////////

const animateElements = document.querySelectorAll(".animate");

const animateElement = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(animateElement, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
});

animateElements.forEach((el) => observer.observe(el));


const divAnimation = document.getElementById('strengths');

window.addEventListener('scroll', function () {
  // code pour récupérer la position de défilement (scroll) de l'utilisateur
  if (window.scrollY > divAnimation.getBoundingClientRect().bottom) {
    // code pour ajouter une classe à une div

    document.getElementById('animate1').classList.add('strengths2');
    document.getElementById('animate2').classList.add('strengths3');
    document.getElementById('animate3').classList.add('strengths4-5');
  } else {
    document.getElementById('animate1').classList.remove('strengths2');
    document.getElementById('animate2').classList.remove('strengths3');
    document.getElementById('animate3').classList.remove('strengths4-5');
  }
});
/////////////// FORMULAIRE DE CONTACT Modale ////////////////////

const bulleContact = document.getElementById("bulleDialogue");
const formModale = document.getElementById("containerFormulaire");

bulleContact.addEventListener("click", () => {
  formModale.classList.remove("containerFormContact");
  formModale.classList.add("formulaireModale");
});

const croix = document.getElementById("croix");

croix.addEventListener("click", () => {
  formModale.classList.remove("formulaireModale");
  formModale.classList.add("containerFormContact");
});

const buttonFormModale = document.getElementById("buttonFormModale");
const erreurModale = document.getElementById("erreurModale");

buttonFormModale.addEventListener("click", (e) => {
  const inputNameModale = document.getElementById("inputNameModale").value;
  const inputEmailModale = document.getElementById("inputEmailModale").value;
  const inputTextModale = document.getElementById("inputTextModale").value;
  if (inputNameModale === "" || inputEmailModale === "" || inputTextModale === "") {
    e.preventDefault();
    erreurModale.innerHTML = "veuillez renseigner tous les champs";
  } else {
    alert(`Bonjour ${inputNameModale}, \n Votre Message à bien été prise en compte. \nVous allez recevoir une confirmation à l'adresse suivante : \n ${inputEmailModale}`);
  }
});

/////////////// DarkMode ////////////////////

const body = document.getElementsByTagName("body")[0];
const themeSwitch = document.querySelector("#themeLogo");
const containerBody = document.getElementById("containerBody");

themeSwitch.addEventListener("click", () => {
  body.classList.toggle("nuit");
  containerBody.classList.toggle("nuit");
  formModale.classList.toggle("nuit");

  if (
    body.classList.contains("nuit") &&
    containerBody.classList.contains("nuit") &&
    formModale.classList.contains("nuit")
  ) {
    themeSwitch.innerHTML = "&#9788;";
  } else {
    themeSwitch.innerHTML = "&#9789;";
  }
});
