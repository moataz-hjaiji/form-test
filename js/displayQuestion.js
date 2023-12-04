function displayForm() {
  const questionResponseContainers = document.querySelectorAll('.question-response');
 
  questionResponseContainers.forEach((qr) => {
    const questionDiv = qr.querySelector('.question');
    questionDiv.addEventListener('click', () => {
      questionResponseContainers.forEach((otherQr) => {
        if (otherQr !== qr) {
          otherQr.classList.remove('show-question-form');
        }
      });
      qr.classList.toggle('show-question-form');
    });
  });
 }
 
 displayForm();
 