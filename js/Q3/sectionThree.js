import {showCanadianProvince} from "./index.js"
export function createDynamicDiplomes()
{
  const nbrOfFormQuestionSelect = document.querySelector("#nbr-diplome");
  nbrOfFormQuestionSelect.addEventListener('change',()=>{
    const nbrQuestion = nbrOfFormQuestionSelect.value;
    const containerNbrQuestion = document.querySelector('.nbr-questions-diplome');
    containerNbrQuestion.innerHTML='';
    for(let i=0;i<nbrQuestion;i++){
      containerNbrQuestion.innerHTML += createForm(i+1);
      showCanadianProvince(i+1);
    }
  })
}

createDynamicDiplomes();




const createForm = (index) =>{
  return `
  <tr>
  <table name="education" class="RegistrationFormTable">
								<tbody><tr class="RegistrationFormTableTitle">
									<td>
										DOMAINE DE FORMATION ET EXPÉRIENCE PROFESSIONNELLE ${index}	
									</td>
								</tr>
								<tr>				
									<td class="error2">
										<label for="TypeOfDegreeTrainingFields${index}">Question 1 : Quel type de grade / diplôme / programme est-il?</label> 
										<select name="TypeOfDegreeTrainingFields${index}" class="selectboxLong section3 error2" style="width:auto;" required="" aria-required="true">											
											<option value="">-- Veuillez sélectionner --</option>
											<option value="Pas de diplôme">Pas de diplôme</option>
											<option value="Diplôme d'études secondaires">Diplôme d'études secondaires</option>
											<option value="Diplôme d'enseignement secondaire général">Diplôme d'enseignement secondaire général</option>
											<option value="Diplôme d'enseignement secondaire professionnel ou technique">Diplôme d'enseignement secondaire professionnel ou technique</option>
											<option value="Apprentissage">Apprentissage</option>
											<option value="Associate Degree (Amérique du Nord)">Associate Degree (Amérique du Nord)</option>											
											<option value="Vocational College">Vocational College</option>
											<option value="Trade School Certificate or Diploma">Trade School Certificate or Diploma</option>
											<option value="Certificat d' études collégiales (amérique du  nord) ">Certificat d'études collégiales (Amérique du Nord)</option>n&gt;											
											<option value="Diplôme d'études collégiales (amérique du nord)">Diplôme d'études collégiales (Amérique du Nord)</option>
											<option value="Brevet de Technicien Supérieur (BTS) (sytème français ou sytème francophone d'afrique)">Brevet de Technicien Supérieur (BTS) (sytème français ou sytème francophone d'Afrique)</option>											
											<option value="Diplôme Universitaire de Technologie (DUT)">Diplôme Universitaire de Technologie (DUT)</option>
											<option value="Licence (Bac + 3 du sytème français ou du sytème francophone d'afrique)">Licence (Bac + 3 du sytème français ou du sytème francophone d'Afrique)</option>
											<option value="Maîtrise (Bac + 4 du sytème français ou du sytème francophone d'afrique)">Maîtrise (Bac + 4 du sytème français ou du sytème francophone d'Afrique)</option>											
											<option value="Bachelors Degree d' un collège (amérique du nord)">Bachelors Degree d'un Collège (Amérique du Nord)</option>
											<option value="Bachelors Degree - (Études universitaires de premier cycle)">Bachelors Degree  - (Études universitaires de premier cycle)</option>
											<option value="Diplôme d'Étudessupérieures spécialisées (dess)">Diplôme d'Études Supérieures Spécialisées (DESS)</option>
											<option value="Diplôme d'Études approfondies (dea)">Diplôme d'Études Approfondies (DEA)</option>																																	
											<option value="Masters Degree - (Études universitaires)">Masters Degree - (Études universitaires)</option>
											<option value="Ph.D. ou Doctorat - (Études universitaires de troisième cycle)">Ph.D. ou Doctorat - (Études universitaires de troisième cycle)</option>
											<option value="Autres types de grade / diplôme">Autres types de grade / diplôme</option>										
										</select>
									</td>
								</tr>
								<tr>				
									<td class="error2">
										<p>Question 2 : Combien d'années et/ou de mois sont-ils nécessaires pour compléter ce diplôme?</p>
											<!--<div style='margin-left:20px;'>-->
												<br>	
												<label for="ProgramDurationInYearsTrainingFields${index}">Nombre d'année(s) :</label>  
												<select name="ProgramDurationInYearsTrainingFields${index}" class="section3 error2" style="width:auto;" required="" aria-required="true">
													<option value="">-- Veuillez sélectionner --</option>
													<option value="0">0 année</option>
													<option value="1 année">1 année</option>
													<option value="2 années">2 années</option>
													<option value="3 années">3 années</option>
													<option value="4 années">4 années</option>
													<option value="5 années">5 années</option>
													<option value="6 années">6 années</option>
													<option value="7 années">7 années</option>
													<option value="8 années">8 années</option>
													<option value="9 années">9 années</option>
													<option value="10 années">10 années</option>
													<option value="11 années">11 années</option>
												</select>
												
												<label for="ProgramDurationInMonthsTrainingFields${index}">Nombre de mois : </label>
												<select name="ProgramDurationInMonthsTrainingFields${index}" class="section3 error2" style="width:auto;" required="" aria-required="true">
													<option value="">-- Veuillez sélectionner --</option>
													<option value="0 mois">0 mois</option>													
													<option value="1 mois">1 mois</option>
													<option value="2 mois">2 mois</option>
													<option value="3 mois">3 mois</option>
													<option value="4 mois">4 mois</option>
													<option value="5 mois">5 mois</option>
													<option value="6 mois">6 mois</option>
													<option value="7 mois">7 mois</option>
													<option value="8 mois">8 mois</option>
													<option value="9 mois">9 mois</option>
													<option value="10 mois">10 mois</option>
													<option value="11 mois">11 mois</option>
												</select>
									</td>
										<!--</div>	-->
						
								</tr>				
								<tr>
									<td class="error2">
										<label for="trainingfields${index}">Question 3 : Quel est le domaine d'études indiqué sur votre diplôme ?
										<span>(example : Diplôme d'Ingénieur en Informatique)</span> </label>					
										<input type="text" name="trainingfields1" id="trainingfields${index}" class="textbox section3 error2" required="" aria-required="true">					
						
									</td>
								</tr>				
								<tr>
									<td class="error2">
										<label for="YearsAgoDiploma${index}">Question 4 : Depuis combien d'années avez-vous obtenu ce diplôme? </label>		
										<select name="YearsAgoDiploma${index}" class="selectboxLong section3 error2" required="" aria-required="true">
											<option value="">-- Please select an item --</option>
											<option value="0">0</option>
											<option value="1">1 année</option>
											<option value="2">2 années</option>
											<option value="3">3 années</option>
											<option value="4">4 années</option>
											<option value="5">5 années</option>
											<option value="6">6 années</option>
											<option value="7">7 années</option>
											<option value="8">8 années</option>
											<option value="9">9 années</option>
											<option value="10">10 années</option>
											<option value="11 années et plus">11 années et plus</option>
										</select>						
		
									</td>
								</tr>				
								<tr>
									<td>
									<label for="YearsProfessionPractisedDiploma${index}">
										Question 5 : <span >Au cours des 10 dernières années,</span> avez-vous déjà exercé une profession directement en lien avec ce domaine de formation? 
									
                                    </label>
									<select name="YearsProfessionPractisedDiploma${index}" class="selectboxLong  section3 error2" required="" aria-required="true">
											<option value="">-- Veuillez sélectionner --</option>
											<option value="Non">Non</option>												
											<option value="Oui, moins de 6 mois">Oui, moins de 6 mois</option>
											<option value="Oui, 6 mois à 11 mois">Oui, 6 mois à 11 mois</option>
											<option value="Oui, 12 mois à 23 mois">Oui, 12 mois à 23 mois</option>
											<option value="Oui, 24 mois à 35 mois">Oui, 24 mois à 35 mois</option>
											<option value="Oui, 36 mois à 47 mois">Oui, 36 mois à 47 mois</option>
											<option value="Oui, 48 mois ou plus">Oui, 48 mois ou plus</option>
										</select>										

									</td>
								</tr>
									<tr>
										<td class="error2">
											<label for="CountryDiploma${index}">Question 6 : Dans quel pays ou territoire avez-vous obtenu ce diplôme?</label>					
											<select name="CountryDiploma${index}" id="CountryDiploma1" class="selectboxLong section3 error2"  required="" aria-required="true">
											    <option value="">Select a Country...</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antartica">Antartica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Island">Ashmore and Cartier Island</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option><option value="Congo, Republic of the">Congo, Republic of the</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czeck Republic">Czeck Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gambia, The">Gambia, The</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Howland Island">Howland Island</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Ireland, Northern">Ireland, Northern</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jarvis Island">Jarvis Island</option><option value="Jersey">Jersey</option><option value="Johnston Atoll">Johnston Atoll</option><option value="Jordan">Jordan</option><option value="Juan de Nova Island">Juan de Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, North">Korea, North</option><option value="Korea, South">Korea, South</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia, Former Yugoslav Republic of">Macedonia, Former Yugoslav Republic of</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Man, Isle of">Man, Isle of</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia, Federated States of">Micronesia, Federated States of</option><option value="Midway Islands">Midway Islands</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcaim Islands">Pitcaim Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romainia">Romainia</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Scotland">Scotland</option><option value="Senegal">Senegal</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Islands</option><option value="South Sudan,  Republic of">South Sudan,  Republic of</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Tobago">Tobago</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad">Trinidad</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="Uruguay">Uruguay</option><option value="USA">USA</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wales">Wales</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Yugoslavia">Yugoslavia</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
											</select>

											<div id="ProvinceOfDiploma1" style="display:none;">
												<label for="ProvinceDiploma${index}">Veuillez indiquer la province canadienne : </label>	
												<select name="ProvinceDiploma${index}" class="selectboxLong  section3">
													<option value=" ">--Veuillez sélectionner--</option>
													<option value="Alberta">Alberta</option>
													<option value="Colombie-Britannique">Colombie-Britannique</option>
													<option value="Manitoba">Manitoba</option>
													<option value="Nouveau-Brunswick">Nouveau-Brunswick</option>
													<option value="Terre-Neuve-et-Labrador">Terre-Neuve-et-Labrador</option>
													<option value="Nouvelle-Écosse">Nouvelle-Écosse</option>
													<option value="Ontario">Ontario</option>
													<option value="Île-du-Prince-Édouard">Île-du-Prince-Édouard</option>
													<option value="Québec">Québec</option>
													<option value="Saskatchewan">Saskatchewan</option>
													<option value="Territoires du Nord-Ouest">Territoires du Nord-Ouest</option>
													<option value="Nunavut">Nunavut</option>
													<option value="Yukon">Yukon</option>
												</select>
											</div>	
										
									</tr>
								</tbody></table>
                </tr>
  `

  ;
}
