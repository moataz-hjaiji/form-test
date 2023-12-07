<?php
require "./helper/inArrayExist.php";


function validFormData($form){
    $provinces = require "./data/provinceOfDestination.php";
    $netWorthOptions = require './data/netWorthOptions.php';



    if(!isset($form['marital-status']) || !in_array(strtolower($form['marital-status']),['yes','no'])){
        return 'marital status missing';
    }
    if(!isset($form['ProvinceOfDestination']) || $form['ProvinceOfDestination']===""){
        return "ProvinceOfDestination value missing";
    }
    //$provinces = require "./data/provinceOfDestination.php";

    if(!inArrayExist($form['ProvinceOfDestination'],$provinces)){
        return 'invalid value for ProvinceOfDestination';
    }
    if(!isset($form['netWorthOptions'])){
        return 'netWorthOptions value missing';
    }
    if(!inArrayExist($form['netWorthOptions'],$netWorthOptions)){
        return "invalid value for netWorthOptions";
    }
    if(!isset($form['email'])){
        return 'missing email value';
    }
    if (!checkEmailValidation($form['email'])){
        return 'invalid email format';
    }
    if(!isset($form['confirm-email'])){
        return 'missing confirm-email value';
    }
    if(!checkEmailValidation($form['confirm-email'])){
        return "invalid email format value";
    }
    if(!$form["confirm-email"]===$form['email']){
        return 'email and confirm email not identical';
    }
    if(!isset($form['phone1'])){
        return 'phone number invalid';
    }
    if(!checkPhone($form['phone1'])){
        return 'invalid phone number format';
    }
    if(isset($form['phone2']) && $form['phone2']!="" && !checkPhone($form['phone2'])){
        return 'invalid second phone number format ';
    }
}

function checkEmailValidation(String $email): bool
{
    $pattern = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
    return preg_match ($pattern, $email);
}
function checkAllNecessaryDataSent($form){
    $array = ['marital-status','ProvinceOfDestination'];
    foreach ($array as $item){
        if(!isset($form[$item])){
            return 'missing value '.$item;
        }
    }

}

function checkPhone(String $phone){
    $pattern =  '/^\+?\d+$/';
    return preg_match($pattern, $phone);
}

