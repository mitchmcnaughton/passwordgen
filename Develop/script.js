// Assignment Code
var password;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //adds a prompt for the password length
  var passwordLength = prompt("How long do you want your password to be(min 8, max 128)")

  //checks if the password length is in between the requirements
  for (; passwordLength>128 ||passwordLength<8;){
    passwordLength = prompt("Please enter a length between 8-128")
  }
  
  //checks if the user wants to include lowercase letters and makes sure they use y/n
  var lowerCase = prompt("Do you want to include lowercase lettes? (y/n)")
  for (;lowerCase!=='y'&&lowerCase!=='n';){
    lowercase = prompt("please enter y/n");
  }
  var upperCase = prompt("Do you want to include uppercase letters?(y/n)")
  for (;upperCase!=='y'&&upperCase!=='n';){
    upperCase = prompt("please enter y/n");
  }
  var numbers = prompt("Do you want to include numbers?(y/n)")
  for (;numbers!=='y'&&numbers!=='n';){
    numbers = prompt("please enter y/n");
  }
  var specialCharacter = prompt("Do you want to include Special Characters?(y/n)")
  for (;specialCharacter!=='y'&&specialCharacter!=='n';){
    specialCharacter = prompt("please enter y/n");
  }

  var allowedPassword = ""

  if (lowerCase=== 'y') {
    allowedPassword = allowedPassword+ "abcdefghijklmnopqrstuvwxyz";
  }

  console.log(allowedPassword)

  if (upperCase=== 'y') {
    allowedPassword = allowedPassword+ "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  console.log(allowedPassword)

  if (numbers=== 'y') {
    allowedPassword = allowedPassword+ "0123456789";
  }

  console.log(allowedPassword)

  if (specialCharacter=== 'y') {
    allowedPassword = allowedPassword+ " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  console.log(allowedPassword)
  allowedPassword = String(allowedPassword)
  
  console.log(allowedPassword)
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()*allowedPassword.length);
    password+= allowedPassword.substring(randomNumber, randomNumber);
    console.log(password)
  }
  
  
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generateBtn)
