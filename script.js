// Select all the elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll('.stars i')
// Loop trough the "stars" NodeList
console.log(stars)
stars.forEach((star,index1) => {
  // Add an event listener that runs when the click "event" is triggered 
  console.log(index1)
  star.addEventListener('click',() =>{
    // Loop through the "stars" NodeList Again
    stars.forEach((star,index2) => {
    //   console.log(index2)
      //   Add the "active" class to the clicked star and any stars with a lower index 
      // and remove the "active" class form any stars with a higher index
      index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
    });
  });
})

let submitButton = document.getElementById('submitButton');
let commentsArea = document.getElementById('comments-area');
let formArea = document.getElementById('form-area');

submitButton.addEventListener('click', () => {
  // 1 get the values
  let inputForm = document.getElementById('form-textarea').value;
  let messageError=document.getElementById('message-error');

  if(inputForm ===''){
    return messageError.innerHTML = 'Le champ doit être rempli'
  } else {
    messageError.innerHTML='';
  }
  // 2 create elements
  let commentArea=document.createElement('div');
  let commentValue=document.createElement('p');
  commentValue.innerHTML=inputForm;

  // 3 add a class
  commentArea.classList.add('comments-area');
  

  // 4 specify the dependency of the sections
  commentSection.appendChild(commentArea).appendChild(commentValue);
})