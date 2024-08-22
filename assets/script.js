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
let score = 25;
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

                        messageEl.textContent = guess > secretNumber ? "Too High" : "Too Low"
                        scoreEl.textContent = score

                    } else {
                        displayMessage("You Have Lost the Game")
                        gameAreaEl.style.backgroundColor = "#fff";
                        scoreEl.textContent = 0
                    }


                } else { 
                    //success
                    hideNumEl.textContent = secretNumber
                    hideNumEl.style.width = "50%"
                    hideNumEl.style.transition = "all 0.5s ease-in"
                    gameAreaEl.style.backgroundColor = "#fcca03";
                    displayMessage("Congratultations, You guessed Correct!")


                }git


                } else {
                    displayMessage("Please Enter a Number")
                }
            });

            //display message
            const displayMessage = function (message) {
                messageEl.textContent = message
            }


            //reset the game
            btnPlayEl.addEventListener('click',()=>{
                score = 25;
                secretNumber = Math.floor(Math.random()*25+1);
                scoreEl.textContent = score;
                hideNumEl.textContent = "?";
                hideNumEl.style.width = "25%";
                hideNumEl.style.transition = "all 0.5s ease-in";
                inputNumberEl.value = "";
                gameAreaEl.style.backgroundColor = "#ddd";
                displayMessage("Start Guessing...........")

            })
