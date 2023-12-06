import { showErrorMessage } from "../js/Error/showError.js";
import { notSelectFiledOneInSelect } from "../js/helper/index.js";

export function validQ3(){
  const selectDiplome = document.querySelector("#diplome-secondaires");
  const nbrDisplomeSelect = document.querySelector('#nbr-diplome')
  if(!notSelectFiledOneInSelect("#diplome-secondaires")){
    showErrorMessage(selectDiplome)
  }
  if(!notSelectFiledOneInSelect('#nbr-diplome')){
    showErrorMessage(nbrDisplomeSelect)
  }else{
    const nbrDiplome = parseInt(nbrDisplomeSelect.value);
    for(let i=1;i<=nbrDiplome;i++){
      checkForumDiplomeValid(i);
    }
  }
}
function checkForumDiplomeValid(index){
  const classSelectWithoutIndex = ['TypeOfDegreeTrainingFields','ProgramDurationInYearsTrainingFields','ProgramDurationInMonthsTrainingFields','YearsAgoDiploma','YearsProfessionPractisedDiploma','CountryDiploma']
  classSelectWithoutIndex.forEach(cl=>{
    const select = document.querySelector(`[name=${cl}${index}]`);
    if(!notSelectFiledOneInSelect(`[name=${cl}${index}]`)){
      showErrorMessage(select);
    }
    const selectCountryObtainDisploma = document.querySelector(`[name=CountryDiploma${index}]`)
    if(checkCountryObtainDisplomaCanada(selectCountryObtainDisploma) && !notSelectFiledOneInSelect(`[name=ProvinceDiploma${index}]`)){
      showErrorMessage(selectCountryObtainDisploma)
    }
  })
}
function checkCountryObtainDisplomaCanada(select){

  return select.value.toLowerCase() === "canada";
}
