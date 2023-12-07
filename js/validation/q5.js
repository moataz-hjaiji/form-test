import {isOneBoxChecked} from "../helper/isOneBoxChecked.js";
import {isNotFirstOptionInMultipleSeletors} from "../helper/index.js";

export function validQ5(){
    let test = true;
    const nameTag = 'HowToAssessEnglishLevel';
    const selectorClass = ['ListeningEnglish','SpeakingEnglish','ReadingEnglish','WritingEnglish'];
    const querySelector = selectorClass.map(s=>`[name=${s}`);
    const checkCheckBoxChecked = isOneBoxChecked(nameTag)
    if(!checkCheckBoxChecked){
        return false;
    }
    const checkedBoxValue = checkCheckBoxChecked.value;
    if(checkedBoxValue.toLowerCase()==="estimation"){
        test = isNotFirstOptionInMultipleSeletors(querySelector);
    }else {
        const query = selectorClass.map(c=>`#qFive-ielts [name=${c}]`);
        test = isNotFirstOptionInMultipleSeletors(query);
    }
    return  test;
}
