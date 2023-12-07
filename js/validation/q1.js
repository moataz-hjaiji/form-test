import { showErrorMessage } from "../Error/showError.js";
import { isNum, notSelectFiledOneInSelect } from "../helper/index.js";
export function validQ1(){
  let test = true;
  const firstEmailField = document.querySelector("#email");
  const secondEmailField = document.querySelector("#confirm-email");
  const firstNumberField = document.querySelector("#phone1");
  const secondNumberField = document.querySelector("#phone2");
  const selectDestinationPreferred = document.querySelector("#ProvinceOfDestination")
  const paysResidance = document.querySelector('#residence-country');
  if(firstEmailField.value.length===0 || secondEmailField.value.length === 0){
    showErrorMessage(firstEmailField,"Les deux champs d'e-mail ne doivent pas être laissés vides.");
    test = false;
  }
  if(firstEmailField.value !== secondEmailField.value){
    showErrorMessage(secondEmailField,"email 2 is different then email 1");
    test = false;
  }
  if(!isNum(parseInt(firstNumberField.value))){
    showErrorMessage(firstNumberField,'Le nombre doit contenir uniquement des chiffres.')
    test = false;
  }
  if(!notSelectFiledOneInSelect('#ProvinceOfDestination')){
    showErrorMessage(selectDestinationPreferred)
    test = false;
  }
  if(paysResidance.value===""){
    showErrorMessage(paysResidance);
    test = false;
  }
  return test;
}
