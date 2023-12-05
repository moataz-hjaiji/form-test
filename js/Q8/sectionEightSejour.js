const choicesSejourAuQuebec = Array.from(document.querySelectorAll('.tabsStayOrvisitInQuebecPrincipalApplicant-choice'));

choicesSejourAuQuebec.forEach((choice,index)=>{
  choice.addEventListener('click',(e)=>{
    choicesSejourAuQuebec.forEach(ch=>ch.classList.remove('active'))
    e.target.classList.toggle('active');
    hiddenRelativeTableForChoice()
    showRelativeTableForChoice(index)
  })
})
function hiddenRelativeTableForChoice(){
  const tables = Array.from(document.querySelectorAll('.tabsStayOrvisitInQuebecPrincipalApplicant'));
  tables.forEach(table=>table.style.display='none');
}
function showRelativeTableForChoice(index){
  const tables = Array.from(document.querySelectorAll('.tabsStayOrvisitInQuebecPrincipalApplicant'));
  tables[index].style.display = "block";
}