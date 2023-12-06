import {notSelectFiledOneInSelect} from "./notSelectFiledOneInSelect.js";
import {showErrorMessage} from "../Error/showError.js";

export function isNotFirstOptionInMultipleSeletors(SelectorClass){
    SelectorClass.forEach(cl=>{
        const select = document.querySelector(cl);
        if(!notSelectFiledOneInSelect(cl)){
            showErrorMessage(select,'Aucun élément sélectionné.');
        }
    })
}
