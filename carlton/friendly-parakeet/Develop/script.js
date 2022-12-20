var characterLength = 8;
var choiceArr = [];

var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowerCassArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
}

function generatePassword() {
  //I would generatePassword based on the prompts
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(
    prompt(
      "How many characters do you want your password to be? (8 - 128 characters"
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character lenght has to be a number, 8 - 128 digits. Please try again."
    );
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCassArr);
  }
  if (confirm("Would you like special letters in your password?")) {
    choiceArr = choiceArr.concat(specialCassArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
