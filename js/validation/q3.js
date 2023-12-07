import { showErrorMessage } from "../Error/showError.js";
import { notSelectFiledOneInSelect } from "../helper/index.js";

export function validQ3(){
  let test = true;
  const selectDiplome = document.querySelector("#diplome-secondaires");
  const nbrDisplomeSelect = document.querySelector('#nbr-diplome');
  if(!notSelectFiledOneInSelect("#diplome-secondaires")){
    showErrorMessage(selectDiplome)
    test = false;
  }
  if(!notSelectFiledOneInSelect('#nbr-diplome')){
    showErrorMessage(nbrDisplomeSelect)
    test = false;
  }else{
    const nbrDiplome = parseInt(nbrDisplomeSelect.value);
    for(let i=1;i<=nbrDiplome;i++){
      test =  checkForumDiplomeValid(i);
    }
  }
  return test;
}
function checkForumDiplomeValid(index){
  let test = true;
  const classSelectWithoutIndex = ['TypeOfDegreeTrainingFields','ProgramDurationInYearsTrainingFields','ProgramDurationInMonthsTrainingFields','YearsAgoDiploma','YearsProfessionPractisedDiploma','CountryDiploma']
  classSelectWithoutIndex.forEach(cl=>{
    const select = document.querySelector(`[name=${cl}${index}]`);
    if(!notSelectFiledOneInSelect(`[name=${cl}${index}]`)){
      showErrorMessage(select);
      test = false;
    }
    const selectCountryObtainDisploma = document.querySelector(`[name=CountryDiploma${index}]`)
    if(checkCountryObtainDisplomaCanada(selectCountryObtainDisploma) && !notSelectFiledOneInSelect(`[name=ProvinceDiploma${index}]`)){
      showErrorMessage(selectCountryObtainDisploma)
      test = false;
    }
  })
  return test;
}
function checkCountryObtainDisplomaCanada(select){

  return select.value.toLowerCase() === "canada";
}
