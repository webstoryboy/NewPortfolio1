const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

/* calculator */
function getHistory() {
  return document.querySelector(".history-value").innerText;
}
function printHistory(num) {
  document.querySelector(".history-value").innerText = num;
}
function getOutput() {
  return document.querySelector(".output-value").innerText;
}
function printOutput(num) {
  document.querySelector(".output-value").innerText = getFormattedNumber(num);
  if (num == "") {
    document.querySelector(".output-value").innerText = num;
  } else {
    document.querySelector(".output-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

let calc_operator = document.querySelectorAll(".calc_operator");
for (let i = 0; i < calc_operator.length; i++) {
  calc_operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("0");
    } else if (this.id == "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
let calc_number = document.querySelectorAll(".calc_number");
for (let i = 0; i < calc_number.length; i++) {
  calc_number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    if (output !== NaN) {
      //if output is number
      output = output + this.id;
      printOutput(output);
    }
  });
}

/* drum */
function playSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const drum_key = document.querySelector(
    `.drum_key[data-key = "${e.keyCode}"]`
  );
  if (!audio) return; // stop the function from running all together.
  audio.currentTime = 0; // rewind to the start.
  audio.play();
  drum_key.classList.add("playing");
  drum_key.classList.remove("playing");
  drum_key.classList.toggle("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform.
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".drum_key");
keys.forEach((drum_key) =>
  drum_key.addEventListener("transitionend", removeTransition)
);
window.addEventListener("keydown", playSound);
