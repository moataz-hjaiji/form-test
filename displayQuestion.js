// function displayForm() {
//   const questionResponseContainers = document.querySelectorAll('.question-response');

//   questionResponseContainers.forEach((qr) => {
//     qr.addEventListener('click', (event) => {
//       // Check if the click target is an input or textarea
//       const isInputField = event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';

//       // Toggle the class only if not clicking on an input or textarea
//       if (!isInputField) {
//         questionResponseContainers.forEach((otherQr) => {
//           if (otherQr !== qr) {
//             otherQr.classList.remove('show-question-form');
//           }
//         });
//         qr.classList.toggle('show-question-form');
//       }
//     });
//   });
// }

// displayForm();

// function displayForm() {
//   console.log('hey');
//   const questionResponseContainer = Array.from(document.querySelectorAll('.question-response'));

//   questionResponseContainer.map((qr) => {
//     qr.addEventListener('click', (event) => {
//       if (!event.target.closest('form')) {
//         qr.classList.toggle('show-question-form');
//       }
//     });
//   });
// }

// displayForm();
// function displayForm() {
//   const questionResponseContainers = document.querySelectorAll('.question-response');

//   questionResponseContainers.forEach((qr) => {
//     qr.addEventListener('click', () => {
//       questionResponseContainers.forEach((otherQr) => {
//         if (otherQr !== qr) {
//           otherQr.classList.remove('show-question-form');
//         }
//       });
//       qr.classList.toggle('show-question-form');
//     });
//   });
// }

// displayForm();
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
 