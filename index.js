const textField = document.querySelector ("#textfield");
const enterButton = document.querySelector ("#enter");
const resetButton = document.querySelector ("#reset");
const hintButton = document.querySelector ("#hint");
const correctAnswer = Math.floor(Math.random() * 100)+1;
const guessList = document.querySelector ("ul");
let remainderGuesses = 5;
const returnMessage = document.querySelector ("#returnmessage");

console.log(correctAnswer);
console.log(textField);
console.log(enterButton,resetButton, hintButton);

enterButton.addEventListener("click", function() {
    const guess = parseInt (textField.value);
    console.log(textField.value);
    const listItem = document.createElement("li")
    guessList.appendChild(listItem);
    console.log(listItem);
    listItem.textContent = textField.value;
if (guess === correctAnswer){ 
    returnMessage.textContent = "You win!";
    enterButton.disabled = true;
    textField.disabled = true;
  }  else if (isNaN(guess) || guess<1 || guess>100){
    returnMessage.textContent = "Enter a valid number between 1 and 100";
  } else {
    remainderGuesses--;
    returnMessage.textContent = `Attempts remaining: ${remainderGuesses}`
} if (remainderGuesses === 0){
    returnMessage.textContent ='Game Over!';
    textField.disabled = true;
    enterButton.disabled = true;
    
}

})
