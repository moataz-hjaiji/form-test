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





