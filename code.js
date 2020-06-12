/******************************************************************************************
 * This is a validation CHeck input Desing by Filipe Ferreira For a mortgage caculator
 *  All de validation and error messages were design by me.
 * ****************************************************************************************/
/********************************
 * VALIDATION INPUT 1
 * *****************************/
function validateInput1(valueEntered) {

    //set the user input to a variable to check bellow in the code
    let userInput = valueEntered.value
        //Convert to Number 
    userInput = Number(userInput);
    //Set to two decimals
    userInput = userInput.toFixed(2);

    //Check Range determine by the client
    if (userInput < 0.01 || userInput > 25.00) {
        document.getElementById("erro1").innerHTML = "Out of Range. Please Enter a Value Between 0 and 25.00%";
        document.getElementById("apr").value = 0;
        return;
    } else {
        //write the document back in the page with only too decimals
        document.getElementById("apr").value = userInput;
        document.getElementById("erro1").innerHTML = " ";
    }
}

/********************************
 * VALIDATION INPUT 2
 * *****************************/
function validateInput2(valueEntered) {

    //set the user input to a variable to check bellow in the code
    let userInput = valueEntered.value
        //Convert to Number 
    userInput = Number(userInput);

    //Check Conditions
    if (userInput < 1 || userInput > 40 || !(Number.isInteger(userInput))) {
        document.getElementById("erro2").innerHTML = "Out of Range. Please Enter a Value Between 1 and 40 Years With No Decimals";
        document.getElementById("term").value = 0;
        return;
    } else {
        //write the document back in the page with only too decimals
        document.getElementById("term").value = userInput;
        document.getElementById("erro2").innerHTML = " ";
    }
}

/********************************
 * VALIDATION INPUT 3
 * *****************************/
function validateInput3(valueEntered) {

    //set the user input to a variable to check bellow in the code
    let userInput = valueEntered.value
        //Convert to Number 
    userInput = Number(userInput);
    //Set to two decimals
    userInput = userInput.toFixed(2);

    //Check Condition
    if (userInput <= 0) {
        document.getElementById("erro3").innerHTML = "Out of Range. Please Enter a Value Greater Than 0";
        document.getElementById("amount").value = 0;
        return;
    } else {
        //write the document back in the page with only too decimals
        document.getElementById("amount").value = userInput;
        document.getElementById("erro3").innerHTML = " ";
    }
}
/***************************************
 * Caculate
 * *************************************/

//Caculate the Final result of the amount to pay
function getFinalResult(apr, term, amount) {

    var myForm = document.getElementById("myForm");
    if (!myForm.checkValidity())
        document.getElementById("myForm").reportValidity();
    else {
        return;
    }

}