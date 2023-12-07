import {isCheckBoxChecked, isEmpty, isNotFirstOptionInMultipleSeletors} from "../helper/index.js";
import {showErrorMessage} from "../Error/showError.js";
import {isOneBoxChecked} from "../helper/isOneBoxChecked.js";

export function validQ4(){
    let test = true;
    const choiceOne = document.querySelector("#linguitiques-estimation");
    const choiceTwo = document.querySelector("#utilisation-resultats");
    if(!isCheckBoxChecked(choiceOne) && !isCheckBoxChecked(choiceTwo)){
        showErrorMessage(choiceTwo);
        test = false;
    }else if (isCheckBoxChecked(choiceOne)){
        const tagName = ['ListeningFrench','SpeakingFrench','ReadingFrench','WritingFrench']
        const tagNameWithName = tagName.map(name=>  `[name=${name}]`);
        test = isNotFirstOptionInMultipleSeletors(tagNameWithName);
    }else if(!detectChoiceChecked()) {
        showErrorMessage(document.querySelector('.show-question-section4 > table'),'Aucun élément sélectionné.');
        test = false;
    }
    else{
        const choiceCheckedValue = detectChoiceChecked().value;
        if(['tefaq','tcfq'].includes(choiceCheckedValue.toLowerCase())){
            const tagNameSelector = ['SpeakingFrench','ListeningFrench'];
            const querySelector = tagNameSelector.map(tag=>` #${choiceCheckedValue.toLowerCase()} [name=${tag}]`);
            test = isNotFirstOptionInMultipleSeletors(querySelector);
        }
        else if (['TEF','TCF'].includes(choiceCheckedValue.toUpperCase())) {
            const tagNameSelector = ['SpeakingFrench','ListeningFrench','ReadingFrench','WritingFrench'];
            const querySelector = tagNameSelector.map(tag=>` #${choiceCheckedValue.toUpperCase()} [name=${tag}]`);
            test = isNotFirstOptionInMultipleSeletors(querySelector);
        }
        else if (choiceCheckedValue.toUpperCase()==="DELF"){
            const nameTag = 'DELFLevel';
            const inputIds = ['SpeakingDELF','ListeningDELF','ReadingDELF','WritingDELF'];
            const checkCheckedBox = isOneBoxChecked(nameTag)
            if(!checkCheckedBox){
                test = false;
            }
            inputIds.forEach(inputId=>{
                const input = document.querySelector(`#${inputId}`);
                if(isEmpty(input)){
                    showErrorMessage(input,'Veuillez remplir ce champ.')
                    test = false;
                }
            })
        }
        else {
            const tagName = 'DALFLevel';
            if(isOneBoxChecked(tagName)===false){
                test = false;
            };
        }
    }
    return test;
}
function detectChoiceChecked(){
    const choices = Array.from(document.querySelectorAll('[name="FrenchTestLanguage"]'))
    return choices.find(item=>item.checked);
}
