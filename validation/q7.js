import {isOneBoxChecked} from "../js/helper/isOneBoxChecked.js";
import {isNotFirstOptionInMultipleSeletors} from "../js/helper/index.js";

export function validQ7(){
    const tagNameCheckBox = "HaveFamilyInCanada";
    const selectorClass = ['FamilyInQuebec','ProvinceOfFamilyInQuebec']
    const checkCheckbox = isOneBoxChecked(tagNameCheckBox);
    if(!checkCheckbox){
        return false;
    }
    if(checkCheckbox.value.toLowerCase() ==="yes"){
        const query = selectorClass.map(c=>`[name=${c}]`)
        isNotFirstOptionInMultipleSeletors(query);
    }

}
