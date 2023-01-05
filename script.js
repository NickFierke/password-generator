// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lower = "abcdefghijklmnopqrstuvwxyz".split("")
var nums = "0123456789".split("")
var symbols = "!@#$%^&*()".split("");

function generatePassword() {
  var pw = "";
  var chars = []

  var pwLength = prompt("How long would you like your password to be? It needs to be between 8 - 128 caharcters.")
  if(pwLength < 8 || pwLength > 128) {
    alert("Your password must be between 8 - 128 characters, please retry")
    generatePassword()
  } else {
    if(confirm("Would you like uppercase letters?")) {
      chars = chars.concat(upper)
    }
    if(confirm("Would you like lowercase letters?")) {
      chars = chars.concat(lower)
    }
    if(confirm("Would you like numbers?")) {
      chars = chars.concat(nums)
    }
    if(confirm("Would you like symbols?")) {
      chars = chars.concat(symbols)
    }
    if(chars.length === 0) {
      alert("You need to choose at least one type of charcter to create a  password, please retry")
      generatePassword()
    } else {
      for (var i = 0; i <= pwLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        pw += chars[randomNumber]
      }
    }
    console.log(chars)
  }
  return pw
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
