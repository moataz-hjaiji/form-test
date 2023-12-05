const choicesQ10 = Array.from(document.querySelectorAll('[name="HaveResumeNow"]'));

choicesQ10.forEach((choice)=>{
  choice.addEventListener('click',(e)=>{
    let submitChoice = e.target.value.toLowerCase();
    submitChoice==="yes"?showHiddenQuestion('block'):showHiddenQuestion('none');
})}
)
function showHiddenQuestion(type){
  const questionClass = ['AddResumeQuestion2Label','AddResumeQuestion2FileDescription','AddResumeQuestion2FileField'];
  questionClass.forEach((qc)=>{
    document.getElementById(qc).style.display = type;
  })
}
