
import {validQ1, validQ2, validQ3, validQ4, validQ5, validQ6} from "./validation/index.js";

const q1 = document.querySelector('.question');
export function validation(){
  deleteAllMessageError();
  if(!validQ1()){
    q1.style.background = 'red';
  }
  validQ2();
  validQ3();
  validQ4();
  validQ5();
  validQ6();
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
