'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score_display = document.querySelector('.score');
const check_btn = document.querySelector('.check');
const again = document.querySelector('.again');
const highscore_display = document.querySelector('.highscore');

const max = 1;
const min = 20;
let score = 20;
let secret_number;
let highscore = 0;

const random_num = () => Math.trunc(Math.random() * (max - min + 1)) + min;
//number.textContent = secret_number;
secret_number = random_num();

check_btn.addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No Number';
  } else if (guess === secret_number) {
    message.textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    number.textContent = secret_number;

    if (score > highscore) {
      highscore = score;
      highscore_display.textContent = highscore;
    }
  } else if (guess !== secret_number) {
    if (score > 1) {
      message.textContent =
        guess > secret_number ? '📈 Too High !' : '📉 Too Low !';
      --score;
      score_display.textContent = score;
    } else {
      message.textContent = '💥 you lost the game!';
      score_display.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  score_display.textContent = score;
  secret_number = random_num();

  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  number.textContent = '?';
});
