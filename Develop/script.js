// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var passwordLength = prompt("How long do you want your password to be(min 8, max 128)")

  for (; passwordLength>128 ||passwordLength<8;){
    passwordLength = prompt("Please enter a length between 8-128")
  }

  var lowerCase = prompt("Do you want to include lowercase lettes? (y/n)")
  for (;lowerCase!=='y'||lowerCase!=='n';){
    lowercase = prompt("please enter y/n");
  }
  var upperCase = prompt("Do you want to include uppercase letters?(y/n)")
  for (;upperCase!=='y'||upperCase!=='n';){
    upperCase = prompt("please enter y/n");
  }
  var numbers = prompt("Do you want to include numbers?(y/n)")
  for (;numbers!=='y'||numbers!=='n';){
    numbers = prompt("please enter y/n");
  }
  var specialCharacter = prompt("Do you want to include Special Characters?(y/n)")
  for (;specialCharacter!=='y'||specialCharacter!=='n';){
    specialCharacter = prompt("please enter y/n");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generateBtn)
