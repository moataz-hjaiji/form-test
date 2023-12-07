import { showErrorMessage } from "../Error/showError.js";
import { isEmpty, notSelectFiledOneInSelect } from "../helper/index.js";

export function validQ2(){
  let test = true;
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
    test = false;
  }
  if(!notSelectFiledOneInSelect('#sexe')){
    showErrorMessage(selectSexe);
    test = false;
  }
  if(isEmpty(lastName)){
    showErrorMessage(lastName);
    test = false;
  }
  if(!notSelectFiledOneInSelect('#CountryBirth')){
    showErrorMessage(selectNationBirth)
    test = false;
  }
  if(!notSelectFiledOneInSelect('#Nationality')){
    showErrorMessage(selectNationality);
    test = false;
  }
  if(isEmpty(cityBirth)){
    showErrorMessage(cityBirth)
    test = false;
  }
  if(isEmpty(hbd)){
    showErrorMessage(hbd)
    test = false;
  }
  if(!notSelectFiledOneInSelect("#MaritalStatus")){
    showErrorMessage(statusMatrimonial)
    test = false;
  }
  return test;

}

