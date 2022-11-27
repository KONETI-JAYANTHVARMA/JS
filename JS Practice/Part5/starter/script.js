'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `Correct Number👍😁`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displaySecret = function (secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
}

const displaySecretWidth = function (secretNumberWidth) {
    document.querySelector('.number').style.width = secretNumberWidth;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        
        // when there is no input
        if (!guess) {
            displayMessage('No Number ⁉️🚫');
        }
        
        // when player wins
        else if (guess === secretNumber) {
            displayMessage(`Correct Number 👍😁`);
            document.querySelector('body').style.backgroundColor = '#60b347';
            
            displaySecretWidth('30rem');
            displaySecret(secretNumber);

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        
        //when guess is wrong
        else if (guess!==secretNumber) {
            if (score>1) {
                displayMessage((guess>secretNumber?`Too High 🙄`:`Too Low 🤔`));
                score = score - 1; /* or score--*/
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('You lost the Game 😒😶😶‍🌫️😣');
                document.querySelector('.score').textContent = 0;
            }            
        }  
        
        /*

        // when guess is too high
        else if (guess > secretNumber) {
            if (score>1) {
                document.querySelector('.message').textContent = `Too High 🙄`;
                score = score - 1; // or score--
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the Game 😒😶😶‍🌫️😣';
                document.querySelector('.score').textContent = 0;
            }

        }
        
        // when guess is too low    
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = `Too Low 🤔`;
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the Game 😒😶😶‍🌫️😣';
                document.querySelector('.score').textContent = 0;
            }
        }
    
        */
    });
    


document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...');
        displaySecret('?');
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        displaySecretWidth('15rem');

    })    