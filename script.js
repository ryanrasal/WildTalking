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

document.getElementById('formulaire').addEventListener("submit", (e) => {
    let erreur;
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;
        return false;
    } else {
        e.preventDefault();
        alert("Message envoyé !");
    }
});