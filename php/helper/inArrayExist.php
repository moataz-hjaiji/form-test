<?php
require __DIR__.'/transformArrayValueLowerCase.php';

function inArrayExist($element,$array): bool
{
    return in_array(strtolower($element),transformArrayValueLowerCase($array));
}
