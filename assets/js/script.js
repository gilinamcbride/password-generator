// Arrays for the characters used in the password
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", "=", ">", "?", "@", "[", "]", "\\", "^"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");
// passwordText.value = password;

// Write password to the #password input

//function to generate a random numeric value
// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1)) + min;
//   return value;
// }


function writePassword() {


  //function to create password length
  var passwordLength = function() {
    var length = window.prompt("Input a number between 8 and 128 characters for your password length.");
    if (length >= 8 && length <= 128) {
      length = parseInt(length);
      console.log("User chose " + length + " as their password length.");
    }
    else if (length < 8 || length > 128) {
      window.alert("Your password must be between 8 and 128 characters");
      passwordLength();
    }
    else {
      window.alert("You need to enter a number between 8 and 128.");
      passwordLength();
    }
    window.confirm("Are you sure you want your password to be " + length + " characters long?");

  };
  passwordLength();

  //function to add characters that they want to choose
  //how to make everything come together when you click on each yes
  //none true, 1 true, 2 true, etc
  var chooseCharacters = function() {
    var promptChooseLowerCase = window.confirm("Would you like to use lowercase letters in your password.");
    var promptChooseUpperCase = window.confirm("Would you like to use uppercase letters in your password?");
    var promptChooseNumeric = window.confirm("Would you like to use numbers in your password?");
    var promptChooseSymbolsArray = window.confirm("Would you like to use symbols in your password?");
    var emptyArray = [];

    // all options
    if (promptChooseLowerCase && promptChooseUpperCase && promptChooseNumeric && promptChooseSymbolsArray) {
      var allArray1 = upperCaseArray.concat(lowerCaseArray);
      var allArray2 = allArray1.concat(numericArray);
      var allArray = allArray2.concat(symbolsArray);
      console.log(allArray);
      window.alert("You chose lowercase letters, uppercase letters, numbers, and symbols for your password.");
    }

    // lower but no others
    if (promptChooseLowerCase && !promptChooseUpperCase && !promptChooseNumeric && !promptChooseSymbolsArray) {
      lowerCaseArray;
      console.log(lowerCaseArray);
      window.alert("You chose lowercase letters for your password.");
    }

    // upper but no others
    if (!promptChooseLowerCase && promptChooseUpperCase && !promptChooseNumeric && !promptChooseSymbolsArray) {
      upperCaseArray;
      console.log(upperCaseArray);
      window.alert("You chose uppercase letters for your password.");
    }

    // numbers but no others
    if (!promptChooseLowerCase && !promptChooseUpperCase && promptChooseNumeric && !promptChooseSymbolsArray) {
      numericArray;
      console.log(numericArray);
      window.alert("You chose numbers for your password.");
    }

    // symbols but no others
    if (!promptChooseLowerCase && !promptChooseUpperCase && !promptChooseNumeric && promptChooseSymbolsArray) {
      symbolsArray;
      console.log(symbolsArray);
      window.alert("You chose symbols for your password.");
    }

    // lower and upper
    if (promptChooseLowerCase && promptChooseUpperCase && !promptChooseNumeric && !promptChooseSymbolsArray) {
      var lowerUpperArray = lowerCaseArray.concat(upperCaseArray);
      console.log(lowerUpperArray);
      window.alert("You chose lowercase letters & uppercase letters for your password.");
    }

    // lower and numbers
    if (promptChooseLowerCase && !promptChooseUpperCase && promptChooseNumeric && !promptChooseSymbolsArray) {
      var upperNumberArray = lowerCaseArray.concat(numericArray);
      console.log(upperNumberArray);
      window.alert("You chose lowercase letters & numbers for your password.");
    }

    // lower and symbols
    if (promptChooseLowerCase && !promptChooseUpperCase && !promptChooseNumeric && promptChooseSymbolsArray) {
      var lowerSymbolsArray = lowerCaseArray.concat(symbolsArray);
      console.log(lowerSymbolsArray);
      window.alert("You chose lowercase letters & symbols for your password.");
    }

    // uppers and symbols
    if (!promptChooseLowerCase && promptChooseUpperCase && !promptChooseNumeric && promptChooseSymbolsArray) {
      var upperSymbolsArray = upperCaseArray.concat(symbolsArray);
      console.log(upperSymbolsArray);
      window.alert("You chose uppercase letters & symbols for your password.");
    }

    // upper and numbers
    if (!promptChooseLowerCase && promptChooseUpperCase && promptChooseNumeric && !promptChooseSymbolsArray) {
      var upperNumberArray = upperCaseArray.concat(numericArray);
      console.log(upperNumberArray);
      window.alert("You chose uppercase letters & numbers for your password.");
    }

    // numbers and symbols
    if (!promptChooseLowerCase && !promptChooseUpperCase && promptChooseNumeric && promptChooseSymbolsArray) {
      var numberSymbolsArray = numericArray.concat(symbolsArray);
      console.log(numberSymbolsArray);
      window.alert("You chose numbers & symbols for your password.");
    }

    // lower number symbol
    if (promptChooseLowerCase && !promptChooseUpperCase && promptChooseNumeric && promptChooseSymbolsArray) {
      var lowerNumberSymbol1 = lowerCaseArray.concat(numericCaseArray);
      var lowerNumberSymbol = lowerNumberSymbol1.concat(symbolsArray);
      console.log(lowerNumberSymbol);
      window.alert("You chose lowercase letters, numbers, and symbols for your password.");
    }

    // lower upper symbol
    if (promptChooseLowerCase && promptChooseUpperCase && !promptChooseNumeric && promptChooseSymbolsArray) {
      var lowerUpperSymbol1 = lowerCaseArray.concat(upperCaseArray);
      var lowerUpperSymbol = lowerUpperSymbol1.concat(symbolArray);
      console.log(lowerUpperSymbol);
      window.alert("You chose lowercase letters, uppercase letters, and symbols for your password.");
    }

    // lower upper number
    if (promptChooseLowerCase && promptChooseUpperCase && promptChooseNumeric && !promptChooseSymbolsArray) {
      var array1 = upperCaseArray.concat(lowerCaseArray);
      var lowerUpperNumber = array1.concat(numericArray);
      console.log(lowerUpperNumber);
      window.alert("You chose lowercase letters, uppercase letters, and numbers for your password.");
    }

    // upper number symbol
    if (!promptChooseLowerCase && promptChooseUpperCase && promptChooseNumeric && promptChooseSymbolsArray) {
      var upperNumberSymbol1 = upperCaseArray.concat(numericCaseArray);
      var upperNumberSymbol = upperNumberSymbol1.concat(symbolsArray);
      console.log(upperNumberSymbol);
      window.alert("You chose uppercase letters, symbols, and numbers for your password.");
    }

    // if no prompts are chosen
    if (!promptChooseLowerCase && !promptChooseUpperCase && !promptChooseNumeric && !promptChooseSymbolsArray) {
      window.alert("You must pick a type of characters to include. Try again!")
      chooseCharacters();
    }


  };
  chooseCharacters();


  


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var generatePassword = function() {
  //   for (var i = 0; i < chooseCharacters.length; i++);
  //     console.log(generatePassword[i + 1]);
  // }
  // generatePassword(); 