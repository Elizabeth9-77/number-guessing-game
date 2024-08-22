const gameAreaEl = document.querySelector(".game-area");
const btnPlayEl = document.querySelector(".btn_again");
const btnCheckEl = document.querySelector(".btn_check");
const hideNumEl = document.querySelector(".hide_num");
const messageEl = document.querySelector(".message");
const inputNumberEl = document.querySelector(".input_number");
const highScoreEl = document.querySelector(".high_score");
const scoreEl = document.querySelector(".score");

// generate a random number between 1 and 25
let secretNumber = Math.floor(Math.random() * 25 + 1);
let score = 20;
let highScore = 0;

// event to check the hide number
btnCheckEl.addEventListener("click", () => {
            const guess = Number(inputNumberEl.value);

            // check for empty input
            if (guess) {

                // doesnt match secret number
                if (guess != secretNumber) {

                    if (score > 1) {

                        score--;
                        scoreEl.textContent = score;

                    } else {
                        messageEl.textContent = "You Have Lost the Game"
                        gameAreaEl.style.backgroundColor = "#fff";
                        scoreEl.textContent = 0
                    }


                } else { //success
                }


                } else {
                    messageEl.textContent = "Please Enter a Number"
                }
            }
        )