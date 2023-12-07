import {isOneBoxChecked} from "../helper/isOneBoxChecked.js";
import {notSelectFiledOneInSelect} from "../helper/index.js";
import {showErrorMessage} from "../Error/showError.js";

export function validQ9(){
    let test = true;
    const choicesNameTag = 'EmploymentOfferYesNoPrincipalApplicant';
    const boxChecked = isOneBoxChecked(choicesNameTag);
    if(!boxChecked){
        return false;
    }
    const boxCheckedValueYes = boxChecked.value.toLowerCase()==="yes";
    if(boxCheckedValueYes){
        const querySelector = '[name="EmploymentOfferRegionPrincipalApplicant"]'
        if(!notSelectFiledOneInSelect(querySelector)){
            showErrorMessage(document.querySelector(querySelector),"Aucun élément sélectionné.")
            test = false;
        }
    }
    return test;
}
