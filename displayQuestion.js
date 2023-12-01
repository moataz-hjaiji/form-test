function displayForm() {
  const questionResponseContainers = document.querySelectorAll('.question-response');

  questionResponseContainers.forEach((qr) => {
    qr.addEventListener('click', (event) => {
      if (!event.target.closest('.response')) {
        qr.classList.toggle('show-question-form');
      }
    });
  });
}

displayForm();
