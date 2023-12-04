const choiceFiledQuestionFive = Array.from(document.querySelectorAll('[name="HowToAssessEnglishLevel"]'));
const relativeQuestionChoice = Array.from(document.querySelectorAll('.show-question-section5 > *'));

choiceFiledQuestionFive.forEach((choice,index)=>{
  choice.addEventListener('click',()=>{
    hiddenAllRelativeQuestion()
    relativeQuestionChoice[index].style.display = "block";
  })
})

function hiddenAllRelativeQuestion(){
  relativeQuestionChoice.forEach(qr=>qr.style.display="none");
}