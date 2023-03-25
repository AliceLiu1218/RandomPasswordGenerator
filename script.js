// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare global scope variable indicating what type of data
var lowCase = true;
var upCase = true;
var num = true;
var special = true;
var length = 0;

// generated passwod string (global scope)
var password = "";

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
  var passwordString = ""
  var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var str2 = "abcdefghijklmnopqrstuvwxyz"
  var str3 = "0123456789"
  var str4 = "~!@#$%^&*`"
  var count = 0

  if (lowCase) {
    passwordString = passwordString.concat(str1);
    count++;
  }else {
    passwordString = passwordString.concat("");
  }

  if (upCase) {
    passwordString = passwordString.concat(str2);
    count++;
  }else {
    passwordString = passwordString.concat("");
  }
  
  if (num) {
    passwordString = passwordString.concat(str3);
    count++;
  }else {
    passwordString = passwordString.concat("");
  }

  if (special) {
    passwordString = passwordString.concat(str4);
    count++;
  }else {
    passwordString = passwordString.concat("");
  }

  if (count == 0) {
    alert("Must select at least one character type. Please start over");
  }

  //randomly generate final version of password
  
  for (var i=0; i<length; i++) {
    var randnum = Math.floor(Math.random()*passwordString.length)
    var passcon = passwordString.charAt(randnum);
    password = password.concat(passcon);
  }
 
  return
}

// Write password to the #password input
function writePassword() {
  promptquestion();
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
