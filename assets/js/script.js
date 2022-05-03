// Arrays for the characters used in the password
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", "=", ">", "?", "@", "[", "]", "\\", "^"];

//function to get all password critera
function getPasswordInfo() {
  var length = parseInt(prompt("Input a number between 8 and 128 characters for your password length."));
  if (length >= 8 && length <= 128) {
  }
  else if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128 characters");
    getPasswordInfo();
  }
  else {
    alert("You need to enter a number between 8 and 128.");
    getPasswordInfo();
  }

  var chooseLowerCase = confirm("Would you like to use lowercase letters in your password.");
  var chooseUpperCase = confirm("Would you like to use uppercase letters in your password?");
  var chooseNumeric = confirm("Would you like to use numbers in your password?");
  var chooseSymbols = confirm("Would you like to use symbols in your password?");

  // if no prompts are chosen
  if (!chooseLowerCase && !chooseUpperCase && !chooseNumeric && !chooseSymbols) {
    window.alert("You must pick a type of characters to include. Try again!")
    getPasswordInfo();
  }
  //need to create object to reference prompts chosen
  else {
    var passwordOptions = {
      length: length,
      chooseLowerCase: chooseLowerCase,
      chooseUpperCase: chooseUpperCase,
      chooseNumeric: chooseNumeric,
      chooseSymbols: chooseSymbols
    }
  }
  return passwordOptions;
}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {
  var options = getPasswordInfo();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  // create arrays for possible characters based on user input
  if (options.chooseLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseArray);
    guaranteedCharacters.push(getRandom(lowerCaseArray));
  }

  if (options.chooseUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCaseArray);
    guaranteedCharacters.push(getRandom(upperCaseArray));
  }

  if (options.chooseNumeric) {
    possibleCharacters = possibleCharacters.concat(numericArray);
    guaranteedCharacters.push(getRandom(numericArray));
  }

  if (options.chooseSymbols) {
    possibleCharacters = possibleCharacters.concat(symbolsArray);
    guaranteedCharacters.push(getRandom(symbolsArray));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  //create string from result
  return result.join('');
}


// Get references to the #generate and #password element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);