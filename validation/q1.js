import { showErrorMessage } from "../js/Error/showError.js";
import { isNum, notSelectFiledOneInSelect } from "../js/helper/index.js";
export function validQ1(){
  const firstEmailField = document.querySelector("#email");
  const secondEmailField = document.querySelector("#confirm-email");
  const firstNumberField = document.querySelector("#phone1");
  const secondNumberField = document.querySelector("#phone2");
  const selectDestinationPreferred = document.querySelector("#ProvinceOfDestination")
  const paysResidance = document.querySelector('#residence-country')
  if(firstEmailField.value.length===0 || secondEmailField.value.length === 0){
    showErrorMessage(firstEmailField,"Les deux champs d'e-mail ne doivent pas être laissés vides.");
  }
  if(firstEmailField.value !== secondEmailField.value){
    showErrorMessage(secondEmailField,"email 2 is different then email 1");
  }
  if(!isNum(parseInt(firstNumberField.value))){
    showErrorMessage(firstNumberField,'Le nombre doit contenir uniquement des chiffres.')
  }
  if(!notSelectFiledOneInSelect('#ProvinceOfDestination')){
    showErrorMessage(selectDestinationPreferred)
    
  }
  if(paysResidance.value===""){
    showErrorMessage(paysResidance);
    return false;
  }
  return true;
}