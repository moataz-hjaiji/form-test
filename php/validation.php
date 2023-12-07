<?php
include './validFormData.php';


if($_SERVER['REQUEST_METHOD']!=='POST') {
    echo "invalid method request";
}


echo validFormData($_POST).'</br>';

foreach ($_POST as $key => $value) {
    // Display the key (input name) and its corresponding value
    echo htmlspecialchars($key, ENT_QUOTES, 'UTF-8') . ": " . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . "<br>";
}





