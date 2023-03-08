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