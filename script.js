// Assignment Code
var generateBtn = document.querySelector("#generate");

// Potential password characters
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split("")
var numberChar = "0123456789".split("")
var specialChar = "?!@#$%^&*()_+=".split("")

// Password length preference
var passLength = prompt("How many characters would you like (Pick a number between 8 and 128)?")

// Password length validator
while (parseInt(passLength) < 8 || parseInt(passLength) > 128 || isNaN(passLength) ||  passLength.trim() === "") {
  alert("You must enter a number between 8 and 128 (you may not use letters).")
  passLength = prompt("How many characters would you like (Pick a number between 8 and 128)?")
}


// Password character preference
var wantUpper = confirm("Would you like upper-case letters?")
var wantLower = confirm("Would you like lower-case letters?")
var wantNums = confirm("Would you like numbers?")
var wantSpecial = confirm("Finally, would you like special characters?")

// Password character preference check (ensures user chooses at least one type of character)
while (!wantUpper && !wantLower && !wantNums && !wantSpecial) {
  alert("You must choose at least one type of character for your password!")
  wantUpper = confirm("Would you like upper-case letters?")
  wantLower = confirm("Would you like lower-case letters?")
  wantNums = confirm("Would you like numbers?")
  wantSpecial = confirm("Finally, would you like special characters?")
}

// Generate password 
function generatePassword() {

  var passArray = ""
  var randomPw = ""

  if (wantUpper) {
    passArray += upperCaseChar.join("")
  }

  if (wantLower) {
    passArray += lowerCaseChar.join("")
  }

  if (wantNums) {
    passArray += numberChar.join("")
  }

  if (wantSpecial) {
    passArray += specialChar.join("")
  }


  console.log(passArray)

  if (wantUpper || wantLower || wantNums || wantSpecial) {

    for (i = 0; i < passLength; i++) {

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
