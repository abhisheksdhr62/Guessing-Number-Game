let randomNumber = Math.floor((Math.random()*100)+1)
// console.log(randomNumber)
let userInput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

let p = document.createElement('p')


let prevGuess = []
let numguess =1
let playGame = true

if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validation(guess)
  })
}
function validation(guess){
  if(isNaN(guess)){
     alert("enter a valid number")
  }else if(guess<1){
    alert("write a number more than 0")
  }else if(guess>100){
    alert("enter a number less than hundred")
  }else{
    prevGuess.push(guess)
    if(numguess===10){
      displayGuess(guess)
      displayMessage(`Game Over....Random Number was ${randomNumber}`)
      endGame();
    }else{
     displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if( guess === randomNumber){
    displayMessage(`you guessed the number `)
     endGame()
  }
  else if(guess>randomNumber){
    displayMessage(`number is too high`)
  }else if(guess<randomNumber){
    displayMessage(`number is too low`)
  }
}
function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML += `${guess}, `;
 // console.log(guessSlot.innerHTML += `${guess}`)
  numguess++
  remaining.innerHTML = (11-`${numguess}`)
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
} 
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled', "")
 
  p.classList.add('button')
  p.innerHTML=`<h2 id = "newGame">start the game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}


  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numguess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numguess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);  
      displayMessage('')
      playGame = true;
    });
  }


