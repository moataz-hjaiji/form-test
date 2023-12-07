import {isOneBoxChecked} from "../helper/isOneBoxChecked.js";
import {isEmpty} from "../helper/index.js";
import {showErrorMessage} from "../Error/showError.js";


export function validQ10(){
    let test = true;
    const tagName = "HaveResumeNow";
    const boxChecked = isOneBoxChecked(tagName);
    if(!boxChecked){
        return false;
    }
    const boxCheckedYes = boxChecked.value.toLowerCase() === "yes";
    if(boxCheckedYes){
        const inputFiled = document.querySelector("#ResumeNamePA");
        const fileUpload = document.querySelector("#CVFile")
        if(isEmpty(inputFiled) || inputFiled.value.length > 30){
            showErrorMessage(inputFiled,'nom du description ne doit pas être vide et doit comporter moins de 30 caractères.');
        }
        const submitedFile = fileUpload.files.length > 0;
        if(!submitedFile){
            showErrorMessage(fileUpload,'Veuillez soumettre le fichier de portfolio, s\'il vous plaît.');
            return false;
        }
        if(!validateFile(fileUpload)){
            showErrorMessage(fileUpload, 'Veuillez respecter ce format : .doc, .docx, .pdf ou .txt, s\'il vous plaît.');
            return false;
        }
    }
    return test;
}


function validateFile(fileInput){
    const allowedExtensions = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain'];
    if(!fileInput.files.length > 0){
        return false;
    }
    const fileName = fileInput.files[0].name;

        const fileType = fileInput.files[0].type;
        if (allowedExtensions.includes(fileType.toLowerCase())) {
            console.log('File is valid.');
        }

}
