// type : block or none
function showOrHiddenFirstHiddenQuestion(type){
  const questionHidden = document.querySelector("#HaveStaysOrVisitsForPA");
  questionHidden.style.display = type;
}
function showOrHiddenSecondHiddenQuestion(type){
  const questionHidden = document.querySelector('.show-question-hidden-8');
  
  questionHidden.style.display = type.toLowerCase();
}
function checkQSubmitTrue(selector){
  const choicesQuestion = Array.from(document.querySelectorAll(selector));
  const submitChoice = choicesQuestion.find(choice=>choice.checked);
  return submitChoice.value.toLowerCase() === 'oui';
}


Array.from(document.querySelectorAll('[name="StayQuebecYesOrNoPAandSpouse"]')).forEach(ele => {
  ele.addEventListener('change',()=>{
    if(checkQSubmitTrue('[name="StayQuebecYesOrNoPAandSpouse"]')){
      showOrHiddenFirstHiddenQuestion("block");
      displaySubQuestion()
    }else{
      showOrHiddenFirstHiddenQuestion('none')
    }
  })
});

function displaySubQuestion(){
  const choices = Array.from(document.querySelectorAll('[name="StaysVisitsForPrincipalApplicant"]'));
  choices.forEach(ele=>{
    ele.addEventListener('click',()=>{
      ele.value.toLowerCase()==="oui"?showOrHiddenSecondHiddenQuestion('block'):showOrHiddenSecondHiddenQuestion('none');
    })
  })
}
