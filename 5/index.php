<?php
function sumDigits($n) {
    return array_sum(str_split($n));
}

function isPalindrome($n) {
    return $n == strrev($n);
}

$number = 12321;
echo "Sum of digits in $number: " . sumDigits($number) . "\n";
echo "$number is " . (isPalindrome($number) ? "a palindrome" : "not a palindrome");
?>
