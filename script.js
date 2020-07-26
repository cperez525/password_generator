// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split("")
var numberChar = "0123456789".split("")
var specialChar = "?!@#$%^&*()_+=".split("")
var passLength = prompt("How many characters would you like (Pick a number between 8 and 128)?")
var wantUpper = confirm("Would you like upper-case letters?")
var wantLower = confirm("Would you like lower-case letters?")
var wantNums = confirm("Would you like numbers?")
var wantSpecial = confirm("Finally, would you like special characters?")

// Generate password 
function generatePassword(){

  var passArray = ""
  var randomPw = ""

  if (wantUpper) {
    passArray += upperCaseChar
  }

  if (wantLower) {
    passArray += lowerCaseChar
  }

  if (wantNums) {
    passArray += numberChar
  }

  if (wantSpecial) {
    passArray += specialChar
  }

  console.log(passArray)

  if (wantUpper || wantLower || wantNums || wantSpecial) {

    for (i = 0; i < passLength; i++){

      randomPw += passArray[Math.floor(Math.random() * passArray.length)]
    }
    
    console.log(randomPw)
  }
  

}

generatePassword()

/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
