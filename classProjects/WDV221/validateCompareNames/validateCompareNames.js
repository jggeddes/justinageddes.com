// JavaScript Document

 /*

  Test Case for Compare Names

  Control test 1
  Inputs        expected error
  "control"     none - result should be "Same"
  "cOntRol"

  Control test 2
  Inputs        expected error
  "control"     none - result should be "Different"
  "andy"


  Blank space test 1
  Inputs            expected error
  "Control"
  ""                  "Input required"
  
  Blank space test 2
  Inputs              expected error
  "     "             "Input required"
  "Control"
  
  Invalid character test 1
  inputs              expected error
  "/"                   "Invalid content"
  "Control"

  Invalid Character test 2
  inputs              expected error
  "Control"
  "\"                   "Invalid content"

  Invalid Character in name test1
  inputs          expected error
  "Control"
  "Mark/"           "Invalid content"

  Invalid Character in name test2
  inputs          expected error
  Mary's         "Invalid content"
  "Control"

  Invalid Character in name test3
  inputs          expected error
  "Ma"ry"         "Invalid content"
  "Control"

  Number test       expected error
  inputs
  "5"                 "Invalid content"
  "Control"


  Name with a number test
  Inputs            expected error
  "Jonathan55"
  "Control"         none - error space should be blank - result will show "Different"

  Character limit test
  Inputs                                                                                                    expected error
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"     "Limit 100 characters"
  "control"
*/


//If the names are the same, the function returns "Same" and if they are different the function returns "Different"
  function compareNames (name1, name2){
    let name1l = name1.toLowerCase();
    let name2l = name2.toLowerCase();
    //valid input so reset the error display to empty
    document.querySelector('#errorDisplay').innerHTML ="";
    if (name1l == name2l) {
      return "Same";
    }

    else {
      return "Different";
    }
  }

  function process (string){
    if (string == true) {
      document.querySelector('#result').innerHTML = compareNames(document.querySelector('#value1').value, document.querySelector('#value2').value)
    }

    else {document.querySelector('#errorDisplay').innerHTML = string;}
  }

  function ValidateInput (name1, name2) {
    //The input value cannot be empty or all spaces, if so it will return "Input required".

    if (name1 == "" || name2=="" || !name1.replace(/\s/g, '').length || !name2.replace(/\s/g, '').length) {
      return('Input Required');
    }

    //The input value cannot contain the following special characters '/' or '\' or ' (apostrophe) or " (quotes), if so it will return "Invalid content".

    if (name1.includes("'") || name2.includes("'") || name1.includes('/') || name2.includes('/') ||name1.includes("\\") ||  name2.includes("\\") || name1.includes('"') || name2.includes('"')){
      return ('Invalid Content');
    }

    //The input value cannot have more than 10 characters, if so it will return "Limit of 100 characters".  (Note: test 10, then change to 100)

    if (name1.length > 100 || name2.length > 100) {
      return("Limit of 100 characters");
      }

    //The input value can contain numbers but cannot be all numbers, if so it will return "Invalid content".

    var numbers = (/^[0-9]+$/);

    if(name1.match(numbers) || name2.match(numbers) ){
      return ("Invalid Content");
    }

    //If the input is valid it will return boolean true.
    else {return true;}
  }



function resetForm()
{
	//this function will call the form object and reset the form elements.  It will also put blanks into the results field.
	
	//alert("inside resetNumberForm()");
	
	document.getElementById("form1").reset();		//Resets the form elements to default values.  Just like reset button
		
	document.getElementById("result").innerHTML = "";	//Blank out the results are on the form.  Ready for next set of values.

	document.querySelector('#errorDisplay').innerHTML = "";
}

