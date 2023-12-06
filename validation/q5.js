import {isOneBoxChecked} from "../js/helper/isOneBoxChecked.js";
import {isNotFirstOptionInMultipleSeletors} from "../js/helper/index.js";

export function validQ5(){
    const nameTag = 'HowToAssessEnglishLevel';
    const selectorClass = ['ListeningEnglish','SpeakingEnglish','ReadingEnglish','WritingEnglish'];
    const querySelector = selectorClass.map(s=>`[name=${s}`);
    const checkCheckBoxChecked = isOneBoxChecked(nameTag)
    if(!checkCheckBoxChecked){
        return;
    }
    const checkedBoxValue = checkCheckBoxChecked.value;
    console.log(checkedBoxValue)
    if(checkedBoxValue.toLowerCase()==="estimation"){
        isNotFirstOptionInMultipleSeletors(querySelector);
    }else {
        const query = selectorClass.map(c=>`#qFive-ielts [name=${c}]`);
        isNotFirstOptionInMultipleSeletors(query);
    }


}
