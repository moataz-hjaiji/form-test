const choiceQ9 = Array.from(document.querySelectorAll('[name="EmploymentOfferYesNoPrincipalApplicant"]'));
const hiddenQuestion = document.querySelector(".show-question-hidden-9");

function checkSubmitYesQuestion(){
  const choiceChecked = choiceQ9.find(ch=>ch.checked);
  return choiceChecked.value.toLowerCase() === "yes";
}

choiceQ9.forEach(ch=>{
  ch.addEventListener('click',()=>{
    if(checkSubmitYesQuestion()){
    
    }
    checkSubmitYesQuestion()?hiddenQuestion.style.display = "block":hiddenQuestion.style.display = "none";
  })
})
