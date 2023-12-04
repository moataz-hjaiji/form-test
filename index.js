
const q1 = document.querySelector('.question');
function validation(){
  deleteAllMessageError();
  if(!validQ1()){
    q1.style.background = 'red';
  }
}
function validQ1(){
  firstEmailField = document.querySelector("#email");
  secondEmailField = document.querySelector("#confirm-email");
  firstNumberField = document.querySelector("#phone1");
  secondNumberField = document.querySelector("#phone2");
  if(firstEmailField.value.length===0 || secondEmailField.value.length === 0){
    showErrorMessage(firstEmailField,"Les deux champs d'e-mail ne doivent pas être laissés vides.");

  }
  if(firstEmailField.value !== secondEmailField.value){
    showErrorMessage(secondEmailField,"email 2 is different then email 1");
  }
  if(!isNum(parseInt(firstNumberField.value))){
    showErrorMessage(firstNumberField,'Le nombre doit contenir uniquement des chiffres.')
  }
  return true;
}
const showErrorMessage = (htmlElement, message) => {
  const parentElement = htmlElement.parentNode;
  let existingErrorMessage = parentElement.querySelector('span.error-message');

  if (!existingErrorMessage) {
    // If no error message exists, create a new span
    const span = document.createElement('span');
    span.classList.add('error-message');
    span.textContent = message;
    parentElement.appendChild(span);
  } else {
    // If an error message exists, update its content
    existingErrorMessage.textContent = message;
  }
};

function isNum(value) {
  return typeof value === 'number' && isFinite(value);
}
const deleteAllMessageError = () =>{
  const messageError = document.querySelectorAll('.error-message');
  const questions = Array.from(document.querySelectorAll('.question'));
  if(messageError){
    Array.from(messageError).forEach((mes)=>{
      mes.remove();
    })
  }
  if(questions){
    questions.forEach(q=>q.style.background="white");
  }
}