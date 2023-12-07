import {isNotFirstOptionInMultipleSeletors} from "../helper/index.js";

export function validQ6(){
    const classSelector = ['Dependents12YearsOrUnder','Dependents13To18Years','Dependents19YearsAndOlder'];
    const query = classSelector.map(q=>`[name=${q}]`);
    return  isNotFirstOptionInMultipleSeletors(query)
}
