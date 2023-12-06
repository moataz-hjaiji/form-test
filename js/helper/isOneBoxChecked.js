import {isCheckBoxChecked} from "./isCheckBoxChecked.js";
import {showErrorMessage} from "../Error/showError.js";

export function isOneBoxChecked(name){
    const checkbox = Array.from(document.querySelectorAll(`[name=${name}]`));
    const checkedBox = checkbox.find(ch=>isCheckBoxChecked(ch));
    if(!checkedBox){
        showErrorMessage(checkbox[0],'Aucun élément sélectionné');
        return false;
    }
    return checkedBox;
}
