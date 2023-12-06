import {isOneBoxChecked} from "../helper/isOneBoxChecked.js";
import {isEmpty} from "../helper/index.js";
import {showErrorMessage} from "../Error/showError.js";


export function validQ10(){
    const tagName = "HaveResumeNow";
    const boxChecked = isOneBoxChecked(tagName);
    if(!boxChecked){
        return;
    }
    const boxCheckedYes = boxChecked.value.toLowerCase() === "yes";
    if(boxCheckedYes){
        const inputFiled = document.querySelector("#ResumeNamePA");
        const fileUpload = document.querySelector("#CVFile")
        console.log(fileUpload);
        if(isEmpty(inputFiled) || inputFiled.value.length > 30){
            showErrorMessage(inputFiled,'nom du description ne doit pas être vide et doit comporter moins de 30 caractères.');
        }
        if(!validateFile(fileUpload)){
            showErrorMessage(fileUpload,'')
        }
    }
}


function validateFile(fileInput){
    const allowedExtensions = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain'];
    if(!fileInput.files.length > 0){
        return false;
    }
    const fileName = fileInput.files[0].name;

        const fileType = fileInput.files[0].type;
        if (allowedExtensions.includes(fileType.toLowerCase())) {
            // Valid file type
            console.log('File is valid.');
        } else {
            // Invalid file type
            alert('Invalid file type. Please select a .doc, .docx, .pdf, or .txt file.');
            // Clear the input field if needed
            // fileInput.value = '';
        }

}
