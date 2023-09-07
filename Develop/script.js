// Assignment Code
var pass;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = pass;

}

  

function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be?(min 8, max 128)")


  //checks if the password length is in between the requirements
  
  for (; passwordLength>128 ||passwordLength<8||isNaN(passwordLength);){
    passwordLength = prompt("Please enter a valid number between 8-128")
  }

  console.log(parseInt(passwordLength));
  

  
  
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
  var allowedPassword = ""

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
  
  
  
 
  for (var i = 0; i <= passwordLength; i++) {
    
    
    var randomNumber = Math.floor(Math.random() *Math.floor(allowedPassword.length));
    pass += allowedPassword[randomNumber];
    
  }
  var length = passwordLength + 9;
  pass = pass.slice(9,length);

  

 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


