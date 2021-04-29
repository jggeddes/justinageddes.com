// JavaScript Document

/*		Test Cases

  Control test 1
  Inputs          expected
  "500"           "Same"
  "500"

  Control test 2
  "93"            "Different"
  "500"

  NaN test 1
  "500"           Error - 'Invalid content, you entered something other than a number'
  "asd"

  NaN test 2
  "asd"           Error - 'Invalid content, you entered something other than a number'
  "500"

  Invalid Character test 1
  "500""          Error - 'Invalid Content - you entered a special character in the number'
  "99"

  Invalid Character test 2
  "99"            Error - 'Invalid Content - you entered a special character in the number'
  "500/"


  Invalid Character test 3
  "99"            Error - 'Invalid Content - you entered a special character in the number'
  "500\"

  Invalid Character test 4
  "99"            Error - 'Invalid Content - you entered a special character in the number'
  "500'"

  Lack of input test 1
  ""              Error - 'Input Required'
  "55"

  Lack of input test 2
  "55"            Error - 'Input Required'
  "      "
  
  Negative number test
  "-55"            Error - 'Invalid content - you entered a negative number'
  "500"
*/

  function compareNumbers(num1, num2) {

    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    if (number1 === number2) {
      return "Equal";
    }

    else if (number1 > number2){
      return number1;
    }

    return number2;
  }

  function validateNumbers(number1, number2){
    //The input value cannot be empty or all spaces, if so it will return "Input required".

    if (number1 == "" || number2=="" || !number1.replace(/\s/g, '').length || !number2.replace(/\s/g, '').length) {
      return('Input Required');
    }

    //The input value cannot contain the following special characters '/' or '\' or ' (apostrophe) or " (quotes), if so it will return "Invalid content".

    if (number1.includes("'") || number2.includes("'") || number1.includes('/') || number2.includes('/') ||number1.includes("\\") ||  number2.includes("\\") || number1.includes('"') || number2.includes('"')){
      return ('Invalid Content - you entered a special character in the number');
    }

    //The input value must be a number.

    if (isNaN(number1) || isNaN(number2)){

      return ('Invalid content, you entered something other than a number');

    }

    //The input value cannot be negative.

    if (number1 < 0 || number2 < 0) {
      return ('Invalid content - you entered a negative number.');
    }
      
    else {
      //input is valid, clear the error and return true to process function
      document.querySelector('#errorDisplay').innerHTML = "";
      return true;}
  }

  function process(string){
    if (string == true) {
      document.querySelector('#result').innerHTML = compareNumbers(document.querySelector('#value1').value, document.querySelector('#value2').value)
    }

    else {document.querySelector('#errorDisplay').innerHTML = string;}
  }





function resetForm()
{
	//this function will call the form object and reset the form elements.  It will also put blanks into the results field.
	
	//alert("inside resetNumberForm()");
	
	document.getElementById("form1").reset();		//Resets the form elements to default values.  Just like reset button
		
	document.getElementById("result").innerHTML = "";	//Blank out the results are on the form.  Ready for next set of values.

	document.querySelector('#errorDisplay').innerHTML = ""; //Reset the error display area
}

