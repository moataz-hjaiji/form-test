<?php

function transformArrayValueLowerCase($array): array
{
    return array_map('strtolower',$array);
}
