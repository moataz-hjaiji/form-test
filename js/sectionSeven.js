const choiceSectionSeven = Array.from(document.querySelectorAll('[name="HaveFamilyInCanada"]'));

choiceSectionSeven.forEach((choice)=>{
  choice.addEventListener('change',()=>{
   choice.value.toLowerCase() === "yes"?showSubQuestion():hiddenSubQuestion();
  })
})

function showSubQuestion(){
  const subQuestion = document.querySelector('.show-question-hidden-7 > table');
  subQuestion.style.display = "block";
}
function hiddenSubQuestion(){
  const subQuestion = document.querySelector('.show-question-hidden-7 > table');
  subQuestion.style.display = "none";
}
