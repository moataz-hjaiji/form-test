const questionResponseShow = document.querySelector('.show-question-section4');
const EstimationCheckBox = document.querySelector("#linguitiques-estimation");
const ResultTestsFrancais = document.querySelector("#utilisation-resultats");


function responsiveQuestion(){
  EstimationCheckBox.addEventListener('change',()=>{
    makeSecondChoiceDisplayNone()
    questionResponseShow.innerHTML = questionEstimation;
  })
  ResultTestsFrancais.addEventListener('change',()=>{
    questionResponseShow.innerHTML = questionResultsTests;
    showSecondQuestion();
  })
}
function showSecondQuestion(){
  const choicesInput= Array.from(document.querySelectorAll('input[name="FrenchTestLanguage"]'));
  let selectedLanguage = '';
  choicesInput.forEach((i)=>{
    i.addEventListener('change',()=>{

      choicesInput.forEach(input => {
          if (input.checked) {
              selectedLanguage = input.value;
          }
      });
      if(selectedLanguage !== ''){
        makeSecondChoiceDisplayNone();
        showSecondQuestionSelected(selectedLanguage)
      }

    })


  })

}
responsiveQuestion()
function makeSecondChoiceDisplayNone(){
  const secondChoice = Array.from(document.querySelectorAll("body > form > div.question-response.show-question-form > div > div.show-second-question-section4 > *"));
  secondChoice.forEach(choice=>{
    choice.style.display= "none";
  })

}
function showSecondQuestionSelected(id){
  const showQuestionRelatedAnswer = document.querySelector(`#${id}`);
  showQuestionRelatedAnswer.style.display = "block";
}
const questionEstimation = `<table class="RegistrationFormTable">
<tbody><tr>
  <th colspan="4" class="RegistrationFormTableTitle">
    COMPÉTENCES LINGUISTIQUES EN  FRANÇAIS LEVEL ESTIMATION
  </th>
</tr>
<tr>
  <td>
    Compréhension Orale : 
  </td>											
  <td>
    <select name="ListeningFrench" class="selectbox SelectBoxEstimateFrenchLevel" aria-invalid="false">
      <option value="">--Selectionnez un niveau--</option>											  
      <option value="Aucun">Aucun</option>
      <option value="Minimal (niveaux 1 et 2)">Minimal</option>
      <option value="débutants (niveaux 3 et 4)">Débutant</option>
      <option value="Intermédiaire (niveaux 5 et 6)">Intermédiaire</option>
      <option value="Intermédiaire avancé (niveaux 7 et 8)">Intermédiaire avancé</option>
      <option value="Avancé (niveaux 9 et 10)"> Avancé</option>
      <option value="Courant (niveaux 11 et 12)">Courant</option>
    </select>
  </td>
  <td>
    Expression Orale : 
  </td>											
  <td>
    <select name="SpeakingFrench" class="selectbox SelectBoxEstimateFrenchLevel">
      <option value="">--Selectionnez un niveau--</option>											  
      <option value="Aucun">Aucun</option>
      <option value="Minimal (niveaux 1 et 2)">Minimal</option>
      <option value="débutants (niveaux 3 et 4)">Débutant</option>
      <option value="Intermédiaire (niveaux 5 et 6)">Intermédiaire</option>
      <option value="Intermédiaire avancé (niveaux 7 et 8)">Intermédiaire avancé</option>
      <option value="Avancé (niveaux 9 et 10)"> Avancé</option>
      <option value="Courant (niveaux 11 et 12)">Courant</option>
    </select>
  </td>
</tr>
<tr>
  <td>
    Compréhension Écrite
  </td>											
  <td>
    <select name="ReadingFrench" class="selectbox SelectBoxEstimateFrenchLevel">
      <option value="">--Selectionnez un niveau--</option>											  
      <option value="Aucun">Aucun</option>
      <option value="Minimal (niveaux 1 et 2)">Minimal</option>
      <option value="débutants (niveaux 3 et 4)">Débutant</option>
      <option value="Intermédiaire (niveaux 5 et 6)">Intermédiaire</option>
      <option value="Intermédiaire avancé (niveaux 7 et 8)">Intermédiaire avancé</option>
      <option value="Avancé (niveaux 9 et 10)"> Avancé</option>
      <option value="Courant (niveaux 11 et 12)">Courant</option>
    </select>
  </td>
  <td>
    Expression Écrite : 
  </td>											
  <td>
    <select name="WritingFrench" class="selectbox SelectBoxEstimateFrenchLevel">
      <option value="">--Selectionnez un niveau--</option>											  
      <option value="Aucun">Aucun</option>
      <option value="Minimal (niveaux 1 et 2)">Minimal</option>
      <option value="débutants (niveaux 3 et 4)">Débutant</option>
      <option value="Intermédiaire (niveaux 5 et 6)">Intermédiaire</option>
      <option value="Intermédiaire avancé (niveaux 7 et 8)">Intermédiaire avancé</option>
      <option value="Avancé (niveaux 9 et 10)"> Avancé</option>
      <option value="Courant (niveaux 11 et 12)">Courant</option>
    </select>
  </td>
</tr>
</tbody></table>`;
const questionResultsTests = `<table class="RegistrationFormTable">
<tbody><tr>
  <th class="RegistrationFormTableTitle">
    LANGUAGE ABILITIES - LIST OF FRENCH TESTS RECOGNIZED BY the MIDIQ	
  </th>
</tr>
<tr>
  <th>
    <strong>Tests ayant deux composantes uniquement : Compréhension Orale and Expression Orale</strong>
  </th>
</tr>								
<tr>				
  <td>
    <!--<strong>Please choose a test: </strong><br>-->
    <input type="radio" name="FrenchTestLanguage" value="tefaq" >
      <strong>TEFaQ:</strong> Test d’évaluation du français adapté pour le Québec de la Chambre 
      de commerce et d’industrie de Paris-Île de France (CCIP-IDF)<br>
      
    <input type="radio" name="FrenchTestLanguage" value="tcfq">
      <strong>TCFQ:</strong> Test de connaissance du français pour le Québec du Centre 
      international d’études pédagogiques (CIEP)<br>
  </td>
</tr>
<tr>
  <th>
    <strong>Tests ayant quatre composantes : Compréhension Orale, Expression Orale, Compréhension  Écrite and Expression Écrite</strong>		
  </th>
</tr>								
<tr>
  <td>
    <input type="radio" name="FrenchTestLanguage" value="TEF" >
      <strong>TEF:</strong> Test d’évaluation du français de la Chambre de commerce et 
      d’industrie de Paris-Île de France (CCIP-IDF)<br>
      
    <input type="radio" name="FrenchTestLanguage" value="TCF" >
      <strong>TCF:</strong> Test de connaissance du français du Centre 
      international d’études pédagogiques (CIEP)<br>
      
    <input type="radio" name="FrenchTestLanguage" value="DELF" >
      <strong>DELF:</strong> Diplôme d’études en langue française du Centre 
      international d’études pédagogiques (CIEP)<br>
      
    <input type="radio" name="FrenchTestLanguage" value="DALF">
      <strong>DALF:</strong> Diplôme approfondi de langue française du Centre 
      international d’études pédagogiques (CIEP) <br>	
  </td>
</tr>				
</tbody></table>`;
