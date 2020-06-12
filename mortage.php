<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Calculate</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php


//Get the Variables
$apr1 = $_GET["apr"];
$term = $_GET["years"];
$amount = $_GET["ammoun"];


$apr = $apr1 / 100 / 12;
$term1 = $term * 12;

//Caculate result
$cal = $amount * ($apr * pow((1 + $apr), $term1)) / (pow((1 + $apr), $term1) - 1);

//Get some va
$finalValue = round($cal, 2);

echo '
<main>
<h2>Total</h2>
<div id="formBlock">
    <form id="myForm">
        <table>
            <tbody>
                <tr>
                    <td>Annual Percentage Rate:</td>
                    <td>'. $apr1 . '%</td>
                </tr>
                <tr>
                    <td>Loan Term:</td>
                    <td>'. $term . ' years</td>
                </tr>
                <tr>
                    <td>Loan Amount:</td>
                    <td>'. "$ ". $amount . '</td>
                </tr>
                <tr>
                    <td>Monthly Payment:</td>
                    <td>'. "$ ". $finalValue . '</td>
                </tr>   
            </tbody>
        </table>
    </form>
</div>
<main>'

?>
    
</body>
</html>