// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare global scope variable indicating what type of data
var lowCase = true;
var upCase = true;
var num = true;
var special = true;
var length = 0;

function promptquestion() {

  // update global scope variable values
  length = prompt("Please enter a length for the Password","Any value from 8 to 128");
  
  while(length < 8 || length > 128) {
    
    alert("Password is not valid, please enter number between 8 to 128!!");
    length = prompt("Please enter a length for the Password","Any value from 8 to 128");
    
  }
  
  var lowerCaseLetter = prompt("Do you want to include LOWERCASE letter in password?","Please enter YES or NO");
  lowerCaseLetter = lowerCaseLetter.toLocaleUpperCase();
  if (lowerCaseLetter === "YES"){
    lowCase = true;
  }else {
    lowCase = false;
  }
  
  var upperCaseLetter = prompt("Do you want to include UPPCASE letter in password?","Please enter YES or NO");
  upperCaseLetter = upperCaseLetter.toLocaleUpperCase();
  if (upperCaseLetter === "YES"){
    upCase = true;
  }else {
    upCase = false;
  }

  var number = prompt("Do you want to include NUMBER in password?","Please enter YES or NO");
  number = number.toLocaleUpperCase();
  if (number === "YES"){
    num = true;
  }else {
    num = false;
  }

  var specialLetter = prompt("Do you want to include SPECIAL LETTER in password?","Please enter YES or NO");
  specialLetter = specialLetter.toLocaleUpperCase();
  if (specialLetter === "YES"){
    special = true;
  }else {
    special = false;
  }

  return;
}

function generatePassword() {
  
  console.log(lowCase);
  console.log(upCase);
  console.log(num);
  console.log(special);
  console.log(9);
  //return password;
}

// Write password to the #password input
function writePassword() {
  promptquestion();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
