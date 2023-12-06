import {isCheckBoxChecked, isEmpty, isNotFirstOptionInMultipleSeletors} from "../js/helper/index.js";
import {showErrorMessage} from "../js/Error/showError.js";
import {isOneBoxChecked} from "../js/helper/isOneBoxChecked.js";

export function validQ4(){
    const choiceOne = document.querySelector("#linguitiques-estimation");
    const choiceTwo = document.querySelector("#utilisation-resultats");
    if(!isCheckBoxChecked(choiceOne) && !isCheckBoxChecked(choiceTwo)){
        showErrorMessage(choiceTwo);
    }else if (isCheckBoxChecked(choiceOne)){
        const tagName = ['ListeningFrench','SpeakingFrench','ReadingFrench','WritingFrench']
        const tagNameWithName = tagName.map(name=>  `[name=${name}]`);
        isNotFirstOptionInMultipleSeletors(tagNameWithName);
    }else if(!detectChoiceChecked()) {
        showErrorMessage(document.querySelector('.show-question-section4 > table'),'Aucun élément sélectionné.');
    }else{
        const choiceCheckedValue = detectChoiceChecked().value;
        if(['tefaq','tcfq'].includes(choiceCheckedValue.toLowerCase())){
            const tagNameSelector = ['SpeakingFrench','ListeningFrench'];
            const querySelector = tagNameSelector.map(tag=>` #${choiceCheckedValue.toLowerCase()} [name=${tag}]`);
            console.log(querySelector)
            isNotFirstOptionInMultipleSeletors(querySelector);
        }
        else if (['TEF','TCF'].includes(choiceCheckedValue.toUpperCase())) {
            const tagNameSelector = ['SpeakingFrench','ListeningFrench','ReadingFrench','WritingFrench'];
            const querySelector = tagNameSelector.map(tag=>` #${choiceCheckedValue.toUpperCase()} [name=${tag}]`);
            isNotFirstOptionInMultipleSeletors(querySelector);
        }
        else if (choiceCheckedValue.toUpperCase()==="DELF"){
            const nameTag = 'DELFLevel';
            const inputIds = ['SpeakingDELF','ListeningDELF','ReadingDELF','WritingDELF'];
            isOneBoxChecked(nameTag);
            inputIds.forEach(inputId=>{
                const input = document.querySelector(`#${inputId}`);
                if(isEmpty(input)){
                    showErrorMessage(input,'Veuillez remplir ce champ.')
                }
            })
        }
        else {
            const tagName = 'DALFLevel';
            isOneBoxChecked(tagName);
        }
    }
}
function detectChoiceChecked(){
    const choices = Array.from(document.querySelectorAll('[name="FrenchTestLanguage"]'))
    return choices.find(item=>item.checked);
}
