// function displayForm() {
//   const questionResponseContainers = document.querySelectorAll('.question-response');
 
//   questionResponseContainers.forEach((qr) => {
//     const questionDiv = qr.querySelector('.question');
//     questionDiv.addEventListener('click', () => {
//       questionResponseContainers.forEach((otherQr) => {
//         if (otherQr !== qr) {
//           otherQr.classList.remove('show-question-form');
//         }
//       });
//       qr.classList.toggle('show-question-form');
//     });
//   });
//  }
 
//  displayForm();
const questions = document.querySelectorAll('.question-response');

questions.forEach(question => {
  const questionTitle = question.querySelector('.question');

  questionTitle.addEventListener('click', (e) => {
    questions.forEach(q => {
      if (q !== question) {
        q.classList.remove('show-question-form');
      }
    });

    question.classList.toggle('show-question-form');
  });
});




 
