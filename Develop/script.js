// declaring variables
var pass;
var generateBtn = document.querySelector("#generate");
var allowedPassword = ""

// function that once the password is generated writes it on screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = pass;
}

  
//a function to generate the password
function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be?(min 8, max 128)")

  //checks if the password length is in between the requirements and if its a valid response.
  for (; passwordLength>128 ||passwordLength<8||isNaN(passwordLength);){
    passwordLength = prompt("Please enter a valid number between 8-128")
  }

  //checks if the user wants to include lowercase letters,uppercase letters, numbers and special characters and makes sure they use y/n
  var lowerCase = prompt("Do you want to include lowercase lettes? (y/n)")
  for (;lowerCase!=='y'&&lowerCase!=='n';){
    lowerCase = prompt("please enter y/n");
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

  //checks for invalid inputs 
  for (;lowerCase==='n'&& upperCase==='n' &&numbers==='n'&&specialCharacter==='n';){
    var lowerCase = prompt("Please say yes to atleast 1 option! Do you want to include lowercase lettes? (y/n)")
    for (;lowerCase!=='y'&&lowerCase!=='n';){
      lowerCase = prompt("please enter y/n");
    }
    upperCase = prompt("Do you want to include uppercase letters?(y/n)")
    for (;upperCase!=='y'&&upperCase!=='n';){
      upperCase = prompt("please enter y/n");
    }
    numbers = prompt("Do you want to include numbers?(y/n)")
    for (;numbers!=='y'&&numbers!=='n';){
      numbers = prompt("please enter y/n");
    }
    specialCharacter = prompt("Do you want to include Special Characters?(y/n)")
    for (;specialCharacter!=='y'&&specialCharacter!=='n';){
      specialCharacter = prompt("please enter y/n");
    }
  }

  //based on the users inputs adds the corrosponding sets of characters
  if (lowerCase=== 'y') {
    allowedPassword = allowedPassword+ "abcdefghijklmnopqrstuvwxyz";
  }

  if (upperCase=== 'y') {
    allowedPassword = allowedPassword+ "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbers=== 'y') {
    allowedPassword = allowedPassword+ "0123456789";
  }

  if (specialCharacter=== 'y') {
    allowedPassword = allowedPassword+ " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  
  //generates the password based on users requirements
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() *Math.floor(allowedPassword.length));
    pass += allowedPassword[randomNumber];
  }
  
  //splices the password
  var length = passwordLength + 9;
  pass = pass.slice(9,length);

}

// adds the functionality when the user clicks the password is generated
generateBtn.addEventListener("click", writePassword);


