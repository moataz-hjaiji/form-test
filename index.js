
import * as valid from "./validation/index.js";

const q1 = document.querySelector('.question');
export function validation(){
  deleteAllMessageError();
  if(!valid.validQ1()){
    q1.style.background = 'red';
  }
  valid.validQ2();
  valid.validQ3();
  valid.validQ4();
  valid.validQ5();
  valid.validQ6();
  valid.validQ7();
}




const deleteAllMessageError = () =>{
  const messageError = document.querySelectorAll('.error-message');
  const questions = Array.from(document.querySelectorAll('.question'));
  if(messageError){
    Array.from(messageError).forEach((mes)=>{
      mes.remove();
    })
  }
  if(questions){
    questions.forEach(q=>q.style.background="white");
  }
}
