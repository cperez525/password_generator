// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split("")
var numberChar = "0123456789".split("")
var specialChar = ("?!@#$%^&*()_+=").split("")
var passLength = prompt("How many characters would you like? (max 20)?")
var wantUpper = confirm("Would you like upper-case letters?")
var wantLower = confirm("Would you like lower-case letters?")
var wantNums = confirm("Would you like numbers?")
var wantSpecial = confirm("Finally, would you like special characters?")

// Generate password on click
generateBtn.addEventListener("click", function() {

  var randomChar = "";

  for (i = 0; i < passLength; i++) {

    randomChar += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)]
  }

  console.log(randomChar)
})

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
