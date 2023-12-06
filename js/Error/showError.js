export function showErrorMessage (htmlElement, message="Ce champ est obligatoire."){
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