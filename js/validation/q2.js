import { showErrorMessage } from "../Error/showError.js";
import { isEmpty, notSelectFiledOneInSelect } from "../helper/index.js";

export function validQ2(){
  const selectSalution = document.querySelector("#salution");
  const selectSexe = document.querySelector('#sexe');
  const lastName = document.querySelector("#prenom");
  const selectNationBirth = document.querySelector('#CountryBirth');
  const selectNationality = document.querySelector('#Nationality');
  const cityBirth = document.querySelector("#ville-naissance");
  const hbd = document.querySelector("#date-de-naissance");
  const statusMatrimonial = document.querySelector("#MaritalStatus");
  if(!notSelectFiledOneInSelect("#salution")){
    showErrorMessage(selectSalution);
  }
  if(!notSelectFiledOneInSelect('#sexe')){
    showErrorMessage(selectSexe);
  }
  if(isEmpty(lastName)){
    showErrorMessage(lastName);
  }
  if(!notSelectFiledOneInSelect('#CountryBirth')){
    showErrorMessage(selectNationBirth)
  }
  if(!notSelectFiledOneInSelect('#Nationality')){
    showErrorMessage(selectNationality);
  }
  if(isEmpty(cityBirth)){
    showErrorMessage(cityBirth)
  }
  if(isEmpty(hbd)){
    showErrorMessage(hbd)
  }
  if(!notSelectFiledOneInSelect("#MaritalStatus")){
    showErrorMessage(statusMatrimonial)
  }
  return true;

}

