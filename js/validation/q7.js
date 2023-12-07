import {isOneBoxChecked} from "../helper/isOneBoxChecked.js";
import {isNotFirstOptionInMultipleSeletors} from "../helper/index.js";

export function validQ7(){
    let test = true;
    const tagNameCheckBox = "HaveFamilyInCanada";
    const selectorClass = ['FamilyInQuebec','ProvinceOfFamilyInQuebec']
    const checkCheckbox = isOneBoxChecked(tagNameCheckBox);
    if(!checkCheckbox){
        return false;
    }
    if(checkCheckbox.value.toLowerCase() ==="yes"){
        const query = selectorClass.map(c=>`[name=${c}]`)
        test = isNotFirstOptionInMultipleSeletors(query);
    }
    return test;
}
