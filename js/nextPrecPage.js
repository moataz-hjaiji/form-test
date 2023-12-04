const createButton= (type,content)=> {
  const button = document.createElement('button');
  button.classList.add(`${type}-button`);
  button.type = "button";
  button.textContent = content;
  return button;
}
function createNextPreviousButton(){
  const questionResponseContainer = Array.from(document.querySelectorAll('.question-response'));
  questionResponseContainer.forEach((qr,index)=>{
    let response = qr.querySelector('.response');
    response.innerHTML += `<span class="button-next-prec"></span>`;
    let containerNextPrec = response.querySelector('.button-next-prec')
    if(index===0){
      containerNextPrec.appendChild(createButton('next','Suivant'));
    }else if (index===questionResponseContainer.length-1){
      containerNextPrec.appendChild(createButton('prec','Précédent'));
    }else{
      // response.innerHTML += `<span class="button-next-prec"></span>`
      containerNextPrec.appendChild(createButton('prec','Précédent'));
      containerNextPrec.appendChild(createButton('next','Suivant'));
    }
  })
}
function nextForm(){
  const nextButtons = Array.from(document.querySelectorAll('.next-button'));
  const questionResponseConainer = Array.from(document.querySelectorAll('.question-response'))
  for(let i =0;i<nextButtons.length; i ++){
    nextButtons[i].addEventListener('click',()=>{
      questionResponseConainer[i].classList.remove('show-question-form');
      questionResponseConainer[i+1].classList.add('show-question-form');
    })
  }
}
function precForm(){
  const precButtons = Array.from(document.querySelectorAll('.prec-button'));
  const questionResponseConainer = Array.from(document.querySelectorAll('.question-response'))
  for(let i =precButtons.length-1;i>=0; i--){
    precButtons[i].addEventListener('click',()=>{
      questionResponseConainer[i+1].classList.remove('show-question-form');
      questionResponseConainer[i].classList.add('show-question-form');
    })
  }
}
createNextPreviousButton();
nextForm();
precForm();