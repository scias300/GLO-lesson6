'use strict';

function guessNumber(num) {
    function makeGuess() {
        let playerNum = prompt('Угадай число от 1 до 100');
        if (playerNum === null) {
            alert('Игра окончена');
        } else {
            playerNum = +playerNum;
            if (playerNum > num) {
                alert('Загаданное число меньше');
                makeGuess();
            } else if (playerNum < num) {
                alert('Загаданное число больше');
                makeGuess();
            } else if (typeof playerNum !== 'number' || isNaN(playerNum)) {
                alert('Введи число!');
                makeGuess();
            } else if (playerNum === num) {
                alert('Поздравляю, Вы угадали!!!');
            }
        }
    }
    makeGuess();
}

guessNumber(5);