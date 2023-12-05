<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<form method="POST" action="#">
    
    <div class="question-response" >
        <p class="question">
            Section 1 : VOTRE PROFIL ET VOTRE CONTACT
        </p>
        <div class="response">
            <table class="response-table">
                <thead>

                        <td>VOTRE PROFIL ET VOTRE CONTACT</td>

                </thead>
                <tbody>
                    <tr>
                        <td>
                        <label for="marital-status">Avez-vous un(e) conjoint(e) / un(e) époux(se) / concubin(e)?</label>
                        </td>
                        <td>
                           <input type="radio" name="marital-status" value="Non" id="non" checked> Non
                           <input type="radio" name="marital-status" value="Oui" id="oui" > Oui
                        </td>
                        </tr>
                    <tr>
                    <td>Quelle est votre destination préférée au Canada?</td>
                        <td>
                            <select name="favorite-destination" id="favorite-destination">
                                <option value="">Sélectionnez une destination</option>
                                <option value="Colombie-Britannique" selected>Colombie-Britannique</option>
                                <!-- Add otder options as needed -->
                            </select>
                        </td>
                    </tr>
                    <tr>
                    <td>Votre avoir net (question facultative)</td>
                    <td>
                        <select name="net-wortd" id="net-wortd">
                            <option value="">Sélectionnez votre avoir net</option>
                            <option value="25,010$ - 100,000$" selected>25,010$ - 100,000$</option>
                            <!-- Add otder options as needed -->
                        </select>
                    </td>

                    </tr>
                    <tr>
                    <td>Votre adresse e-mail (obligatoire):</td>
                    <td>
                        <input type="email" name="email" id="email" required >
                    </td>

                    </tr>
                    <tr>
                    <td>Confirmez votre adresse email (obligatoire):</td>
                    <td>
                        <input type="email" name="confirm-email" id="confirm-email" required >
                    </td>
                    </tr>
                    <tr>
                    <td>Numéro de téléphone 1 (obligatoire):</td>
                    <td>
                        <input type="number" name="phone1" id="phone1" required >
                    </td>
                    </tr>
                    <tr>
                        <td>Numéro de téléphone 2:</td>
                    <td>
                        <input type="tel" name="phone2" id="phone2" >
                    </td>
                    </tr>
                    <tr>
                    <td>Pays de Residence:</td>
                    <td>
                        <input type="text" name="residence-country" id="residence-country" >
                    </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    <div class="question-response">
        <p class="question">
        Section 2 : INFORMATIONS PERSONNELLES
        </p>
        <div class="response">
            <table class="response-table">
                <thead>

                        <td>INFORMATIONS PERSONNELLES</td>

                </thead>
                <tbody>
                  <tr>
                    <td>
                        <label for='salution'>Salution:</label>
                    </td>
                    <td>
                        <select  id='salution' name='salution'>
                            <option value="mr">Mr</option>
                            <option value="mme">Mme</option>
                            <option value="mlle">Mlle</option>
                            <option value="dr">Dr</option>
                        </select>
                    </td>
                    <td><label for="sexe"> Sexe :</label></td>
                    <td>
                        <select name="sexe" id="sexe">
                            <option value="homme">homme</option>
                            <option value="femme">Femme</option>
                        </select>
                    </td>
                  </tr>
                  <tr>
                    <td><label for="prenom"> Nom de famille :</label></td>
                    <td><input type="text" name="prenom" id="prenom"></td>
                  </tr>
                  <tr>
                    <td><label for="CountryBirth"> Pays de naissance:</label></td>
                    <td><?php include('select/selectNation.php') ?></td>
                    <td><label for="CitizenShip">Nationalité :</label> </td>
                    <td><?php include('select/selectNation.php') ?></td>
                  </tr>
                  <tr>
                    <td>Province/Etat :</td>
                    <td>
                        <input type="text" name="province" type="province"/>
                        <input type="checkbox" name="non-province" id="non-province"/> <label>Aucun / Sans Objet</label>
                    </td>
                  </tr>
                  <tr>
                        <td>
                            <label for="ville-naissance">Ville de naissance :</label>
                        </td>
                        <td>
                            <input type="text" name="ville-naissance" id="ville-naissance" required>
                        </td>
                  </tr>
                  <tr>
                    <td> <label for="date-de-naissance">Date de naissance (YYYY-MM-DD):</label> </td>
                    <td>
                        <input type="date" name="date-de-naissance" id="date-de-naissance">
                    </td>
                    <td><label for="MaritalStatus">Status Matrimonial :</label></td>
                    <td><?php include('select/statusMatrimonial.php') ?></td>
                  </tr>
                  <tr>

                  </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="question-response">
        <p class="question">
        Section 3 : ÉDUCATION ET EXPÉRIENCE PROFESSIONNELLE
        </p>
        <div class="response">
            <table class="response-table">
                <tbody>
                    <tr>
                        <td>
                            <label for="diplome-secondaires">Avez-vous un diplôme d'études secondaires (Baccalauréat, High School Diploma)?
(Vous devez avoir terminé l'école secondaire (lycée))</label>
                        </td>
                        <td>
                            <select name="diplome-secondaires" id="diplome-secondaires">
                                <option value="0">-- Please select an item --</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="nbr-diplome">Combien de diplômes avez-vous ?</label>
                        </td>
                        <td>
                            <select name="nbr-diplome" id="nbr-diplome">
                                <option value="0">-- Please select an item --</option>
                                <?php
                                    for($i=1;$i<7;$i++){
                                        echo "<option value='{$i}'>{$i}</option>";
                                    }
                                ?>
                            </select>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <div class="nbr-questions-diplome"></div>
        </div>
    </div>
    <div class="question-response">
        <p class="question">
            Section 4: COMPÉTENCES LINGUISTIQUES EN FRANÇAIS
        </p>
        <div class="response">
            <table>
                <thead>
                    <tr>
                        <td>COMPÉTENCES LINGUISTIQUES EN FRANÇAIS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label for="competences-linguistiques">Comment allez-vous évaluer votre niveau de français ?</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input name="competences-linguitiques-francais" type="radio" id="linguitiques-estimation">
                                <label for="linguitiques-estimation">Estimation</label><br/>
                                <input name="competences-linguitiques-francais" type="radio" id="utilisation-resultats">
                                <label for="utilisation-resultats">Utilisation de résultats de tests de français</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="show-question-section4">
            </div>
            <div class="show-second-question-section4">
                <?php include('content/sectionFourQuestionTwo.php') ?>
            </div>
        </div>

    </div>
    <div class="question-response">
        <p class="question">Section 5 : COMPÉTENCES LINGUISTIQUES EN ANGLAIS</p>
        <div class="response">
            <table>
                <thead>
                    <tr>
                        <td>LANGUAGE ABILITIES - ENGLISH</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
									<th class="RegistrationFormTableTitle">
										LANGUAGE ABILITIES - ENGLISH  	
									</th>
								</tr>							
							<tr>
								<td>
									<strong>Comment allez-vous évaluer votre niveau en anglais?</strong><br>	
									<input type="radio" name="HowToAssessEnglishLevel" value="Estimation" class="section5" required="" aria-required="true">
										Estimation<br>
									<input type="radio" name="HowToAssessEnglishLevel" value="Utiliser les résultats du test IELTS" >
										Utiliser les résultats du test IELTS<br>												
								</td>	
							</tr>							
				</tbody>
            </table>
            <div class="show-question-section5">
                <div style="display:none;">
                <?php include('content/sectionFiveChoiceOne.php') ?>
                </div>
                <div style="display: none;">
                <?php include('content/sectionFiveChoiceTwo.php') ?>
                </div>
                

            </div>
        </div>
    </div>
    <div class="question-response">
    <p class="question">Section 6 : ENFANTS À CHARGE - Vous et/ou votre conjoint(e)</p>
  <div class="response">
      <table>
          <thead>
              <tr>
                  <td>ENFANTS À CHARGE</td>
              </tr>
          </thead>
          <tbody>
            <?php include('content/sectionSix.php') ?>
          </tbody>
      </table>
  </div>
    </div>
    <div class="question-response">
    <p class="question">Section 7 : FAMILLE AU QUÉBEC OU AILLEURS AU CANADA - Vous et/ou votre conjoint(e)</p>
        <div class="response">
            <table>
                <thead>
                    <tr>
                        <td>FAMILLE AU QUÉBEC OU AILLEURS AU CANADA - Vous et/ou votre conjoint(e)</td>
                    </tr>
                </thead>
                <tbody>
                        <?php include('content/sectionSeven.php') ?>
                </tbody>
            </table>
            <div class="show-question-hidden-7">
                <table style="display: none;">
                <?php include('content/sectionQuestionChoiceTrue.php');?>
                </table>
            </div>
        </div>
    </div>
    <div class="question-response">
    <p class="question">Section 8 : SEJOURS ET VISITES AU QUÉBEC OU AILLEURS AU CANADA - Vous et/ou votre conjoint(e)</p>
        <div class="response">
            <table>
                <tbody>
                        <?php include('content/sectionEight.php') ?>
                </tbody>
            </table>
            <div class="show-question-hidden-8" style="display: none;">
                <?php include('content/sectionEightQuestion2.php');?>

            </div>
        </div>
    </div>
    <div class="question-response">
        <p class="question">Section 9 : OFFRE D'EMPLOI FAITE PAR UN EMPLOYEUR AU QUEBEC OU AILLEURS AU CANADA
    Vous et/ou votre conjoint(e)</p>
<div class="response">
    <table>
        <thead>
            <tr>
                <td>Offre d'emploi à vous uniquement.</td>
            </tr>
        </thead>
        <tbody>
            <?php include('content/section9/mainQuestion.php') ?>
        </tbody>
       
    </table>
    <div class="show-question-hidden-9" style="display: none;">
            <?php include('content/section9/subQuestion.php') ?>
        </div>
</div>
    </div>
    <div class="question-response">
        <p class="question">Section 10 : JOINDRE VOTRE CURRICULUM VITAE</p>
        <div class="response">
            <table>
                <thead>
                    <tr>
                        <td>
                        JOINDRE VOTRE CURRICULUM VITAE (CV).
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <?php include("content/section10/mainQuestion.php") ?>
                    <?php include('content/section10/secondQuestion.php') ?>
                </tbody>
            </table>

        </div>
    </div>
    <div class="question-response">
        <p class="question">Section 11 : COMMENTAIRES / NOTES ADDITIONNELLES (optionelle)</p>
        <div class="response">
          <table>
            <thead>
                <tr>
                    <td>COMMENTAIRES / NOTES ADDITIONNELLES (optionelle)</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <label for="commentaires">
                    Avez-vous des commentaires, des informations supplémentaires ou des questions pertinentes?
                Veuillez les entrer dans la zone ci-dessous :
                        </label>
                    </td>
                </tr>
                <tr>
                    <td><textarea name="commentaires" id="commentaires" cols="30" rows="10"></textarea></td>
                </tr>
            </tbody>
        </table>   
        </div>
       
    </div>
</div>
    <button type="button" onclick="validation()">Soumettre</button>
</form>
<script src="index.js"></script>
<script src="js/displayQuestion.js"></script>
<script src="js/nextPrecPage.js"></script>
<script src="js/sectionThree.js"></script>
<script src="js/sectionFour.js" ></script>
<script src="js/sectionFive.js" ></script>
<script src="js/sectionSeven.js"></script>
<script src="js/Q8/sectionEight.js"></script>
<script src="js/Q8/sectionEightSejour.js"></script>
<script src="js/Q9/index.js"></script>
<script src="js/Q10/index.js"></script>
</body>
</html>

