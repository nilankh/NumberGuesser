// Game function:
// - Player must guess a number between a min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if loose
// - Let player choose to play again

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// Assign Ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
      window.location.reload();
    }
  });


// listener for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number betweem ${min} and ${max}`, 'red');
    }
// check if won
    if(guess === winningNum){
        // Game over- won

        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    
    } else{
        // wrong number

        guessesLeft -= 1;
        if(guessesLeft === 0){
            // Game over -lost
             gameOver(false, `Game Over, YOU LOST. The correct number was ${winningNum}`);
        }else{
            // game continues answer wrong
            
            // change border color
            guessInput.style.borderColor = 'red';
            
            // clear the input
            guessInput.value = '';

            //tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

        }
    }
});

// Game over
function gameOver(won, msg){

    let color;
    won === true ? color = 'green' : color = 'red';
     // Disable input
     guessInput.disabled = true;
     // change border color
     guessInput.style.borderColor = color;
    //  Set text color
    message.style.color = color;
     
     // Set message
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}



// set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

