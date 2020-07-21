let minNum = 1,
    maxNum = 10,
    winningNum = randomNum(),
    numberOfGuessesLeft = 3;

const guessedNum = document.getElementById('guess'),
    submitBtn = document.getElementById('submit-btn'),
    message = document.getElementById('message');

function checkValue() {
    if (isNaN(parseInt(guessedNum.value)) || parseInt(guessedNum.value) < minNum || parseInt(guessedNum.value) > maxNum) {
        messageFunction('Please put in a different value', 'red');
        guessedNum.addEventListener('focus', backToNormal);
    } else {
        checkGameStatus();
    }
}

function backToNormal() {
    message.style.display = 'none';
    guessedNum.value = '';
    guessedNum.style.borderColor = 'lightblue';
}

function checkGameStatus() {
    if (parseInt(guessedNum.value) === winningNum) {
        messageFunction('Good job, YOU WIN!', 'green');
        gameEnded();
        return;
    }

    numberOfGuessesLeft -= 1;
    if (numberOfGuessesLeft != 0) {
        messageFunction(`${parseInt(guessedNum.value)} was wrong, you have ${numberOfGuessesLeft} guesses left`, 'red');
        guessedNum.addEventListener('focus', backToNormal);
    } else {
        messageFunction(`The right number was ${winningNum}. You lose`, 'red');
        gameEnded();
    }
}

function messageFunction(msg, color) {
    message.style.display = 'block';
    message.style.color = color;
    message.textContent = msg;
    guessedNum.style.borderColor = color;
}

function newGame() {
    submitBtn.removeEventListener('click', newGame);
    window.location.reload();
}

function gameEnded() {
    guessedNum.disabled = true;
    submitBtn.value = 'Play Again';
    submitBtn.addEventListener('click', newGame);
}

function randomNum() {
    return (Math.floor(Math.random() * (maxNum - minNum + 1) + minNum));
}

submitBtn.addEventListener('click', checkValue);