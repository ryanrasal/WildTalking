// Star-rating  
// Select all the elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll('.stars i')
// Loop trough the "stars" NodeList
// console.log(stars)
let curentRating=document.querySelector('.currentRating')
let curentStarLevel=0;
stars.forEach((star,index1) => {
  // Add an event listener that runs when the click "event" is triggered 
  // console.log(index1)
  star.addEventListener('click',() =>{
    // console.log('clicked')
    // console.log(index1)
    
    curentStarLevel=index1+1;
    curentRating.innerText=`${curentStarLevel}`;

    // Loop through the "stars" NodeList Again
    stars.forEach((star,index2) => {
      // console.log(index2)
      //   Add the "active" class to the clicked star and any stars with a lower index 
      // and remove the "active" class form any stars with a higher index
      index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
    });
  });
})

let submitButton = document.getElementById('submitButton');
// let commentsArea = document.getElementById('comments-area');
let formArea = document.getElementById('form-area');

submitButton.addEventListener('click', () => {
  // 1 get the values
  let inputForm = document.getElementById('form-textarea').value;
  let messageError=document.getElementById('message-error');
  let starLevel=curentRating;
  // console.log(inputForm)
  console.log(starLevel);
  if(inputForm ===''&&curentStarLevel===0){
    return messageError.innerHTML = 'Le champ doit être rempli'
  } else {
    messageError.innerHTML='';
  }
  // 2 create elements
  let commentArea=document.createElement('div');
  let commentValue=document.createElement('p');
  commentValue.innerHTML=`&#11088 ${curentStarLevel}/5 <br> ${inputForm}`;
  console.log(curentRating)
  // let curentRating=document.createElement('div')
  // curentRating.innerText=`${curentRating}`;
  
  // 3 add a class
  commentArea.classList.add('comments-area');
  

  // 4 specify the dependency of the sections
  formArea.appendChild(commentArea).appendChild(commentValue);
})
// NAVBAR TRANSPARENTE
const navbar = document.querySelector('.nav');
let timeOut;
window.addEventListener('scroll', () => {
  if (navbar.classList.contains('nav-opacity')) {
    clearTimeout(timeOut)
  } else {
    navbar.classList.add('nav-opacity')
  }
  timeOut = setTimeout(() => navbar.classList.remove('nav-opacity'), 400)
});
// Explications : au scroll event, si la navbar n'a pas la classe nav-opacity,
//  on l'ajoute. Puis on rajoute un timeout pour enlever la classe après un temps imparti.
//  Entre temps, si on scroll encore, mais que le temps n'est pas encore imparti
//  (donc la navbar possède toujours la classe nav-opacity), on clear le timeout pour l'empêcher
//  de supprimer la classe, et on le relance.
 
// FORMULAIRE

// Récupérer l'élément HTML pour le champ de date
const dateInput = document.getElementById('date');

// Ajouter un écouteur d'événements sur le champ de date pour détecter les changements de valeur
dateInput.addEventListener('change', () => {
  // Récupérer la valeur sélectionnée
  const selectedDate = dateInput.value;

  // Inverser la date sélectionnée
  const reversedDate = selectedDate.split('-').reverse().join('/');
  
  // Afficher la date sélectionnée dans un élément HTML
  const result = document.getElementById('result');
  result.innerHTML = `Vous avez sélectionné la date : ${reversedDate}`;
});

document.getElementById('formulaire').addEventListener('submit', (e) => {
  let erreur;
  let inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = 'Veuillez renseigner tous les champs';
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;
        return false;
    } else {
        e.preventDefault();
        alert("Message envoyé !");
    }
}
});


window.addEventListener('scroll', function() {
  // code pour récupérer la position de défilement (scroll) de l'utilisateur
  let scrollPosition = window.scrollY;
  console.log(scrollPosition)
  if (scrollPosition > 2000) {
    // code pour ajouter une classe à une div
    document.getElementById('animate1').classList.add('strengths2');
    document.getElementById('animate2').classList.add('strengths3');
    document.getElementById('animate3').classList.add('strengths4-5');
  } 
});

