let secretNum = Math.ceil(Math.random() * 20);

const body = document.querySelector("body");

const secret = document.querySelector(".secret");
const message = document.querySelector(".message");
const score = document.querySelector(".score-value");
const highscore = document.querySelector(".highscore-value");

secret.textContent = secretNum;
let scoreValue = 20;
let highScoreValue = 0;

function check() {
  const guessed = Number(document.querySelector(".guess").value);

  if (guessed == secretNum) {
    body.style.backgroundColor = "green";
    secret.textContent = secretNum;
    secret.style.width = "30rem";
    message.textContent = "👏🏻 Correct!";

    if (scoreValue > highScoreValue) {
      highScoreValue = scoreValue;
    }

    highscore.textContent = highScoreValue;
  } else {
    if (guessed !== 0 && scoreValue > 0) {
      message.textContent = guessed > secretNum ? "👆 Too high" : "👇 Too low";
      // must not go below 0
      scoreValue--;
      score.textContent = scoreValue;
      document.querySelector(".guess").value = "";
    } else if (scoreValue === 0) {
      body.style.backgroundColor = "red";
      message.textContent = "💥 You lost!";
    }
  }
}

function again() {
  secretNum = Math.ceil(Math.random() * 20);
  secret.textContent = secretNum;
  body.style.backgroundColor = "black";
  secret.style.width = "15rem";
  scoreValue = 20;
  score.textContent = scoreValue;
  document.querySelector(".guess").value = "";
  message.textContent = "🏁 Guess a number...";
}

document.querySelector(".again-btn").addEventListener("click", again);
document.querySelector(".check-btn").addEventListener("click", check);
