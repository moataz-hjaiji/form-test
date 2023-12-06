export  function showCanadianProvince(index){
    const selected = document.querySelector(`[name=CountryDiploma${index}]`);
    selected.addEventListener('change',()=>{
        selected.value.toLowerCase()==='canada'?showOrHiddenSelectCanadianProvince(index,'block'):showOrHiddenSelectCanadianProvince(index,'none')
    })
}

function showOrHiddenSelectCanadianProvince(index,display){
    const select = document.querySelector(`#ProvinceOfDiploma${index}`);
    select.style.display=display;
}
