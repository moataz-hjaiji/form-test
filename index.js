
import * as valid from "./js/validation/index.js";
import {Section} from "./js/class/section.js";


export function validation(){
  const questions = Array.from(document.querySelectorAll('.question'));
  const validationArray = initialValidationArray(questions);
  deleteAllMessageError();
  deleteClassErrorSection(questions);
  if(allSectionValid(validationArray)){
    // Submit
    console.log("submitted");
    document.querySelector("body > form").submit();
  }

}

const allSectionValid = (validationArray) =>{
  const testValidationSection = validationArray.map((validation)=>{
    if(!validation.valid()){
      validation.className.parentNode.classList.add('error-mode')
      return false;
    }
    return true;
  })
  console.log(testValidationSection);
  return !testValidationSection.includes(false);
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
const deleteClassErrorSection = (questions) =>{
  questions.forEach(q=>q.parentNode.classList.remove('error-mode'));
}
const initialValidationArray = (questions) =>{
  const validationArray = [];
  let i = 0;
  for(let v in valid){
    const section = new Section(questions[i],valid[`validQ${i+1}`]);
    i++;
    validationArray.push(section);
  }
  return validationArray;
}
