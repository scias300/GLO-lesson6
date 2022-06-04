'use strict';

function guessNumber(num) {
    let tries = 10;
    function makeGuess() {
        tries--;
        let playerNum = prompt('Угадай число от 1 до 100');
        if (playerNum === null) {
            alert('Игра окончена');
        } else {
            if (tries === 0) {
                let lose = confirm('Попытки закончились, хотите сыграть еще?');
                if (lose === true) {
                    guessNumber(Math.floor(Math.random() * 100));
                } else {
                    return false;
                }
            }
            if (playerNum === '') {
                alert('Введи число!');
                makeGuess();
            } else {
                playerNum = +playerNum;
                if (playerNum > num) {
                    alert('Загаданное число меньше, осталось попыток ' + tries);
                    makeGuess();
                } else if (playerNum < num) {
                    alert('Загаданное число больше, осталось попыток ' + tries);
                    makeGuess();
                } else if (typeof playerNum !== 'number' || isNaN(playerNum)) {
                    alert('Введи число!');
                    makeGuess();
                } else if (playerNum === num) {
                    let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                    if (win === true) {
                        guessNumber(Math.floor(Math.random() * 100));
                    }
                }
            }
        }
    }
    makeGuess();
}

guessNumber(5);