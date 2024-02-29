// Iteration 2: Generate 2 a random number and display it on the screen
let randomNum1 = Math.round(Math.random() * 100);
let randomNum2 = Math.round(Math.random() * 100);
document.getElementById("number1").textContent = randomNum1;
document.getElementById("number2").textContent = randomNum2;
// Iteration 3: Make the options button functional
let greaterThanButton = document.getElementById("greater-than");
let equalToButton = document.getElementById("equal-to");
let lessThanButton = document.getElementById("lesser-than");
let score = 0;
let time = 6;
let timerId;

greaterThanButton.onclick = () => {
    if (randomNum1 > randomNum2) {
        score++;
        resetTimer();
    } else {
        location.href = "./gameover.html";
    }
    randomNum1 = Math.round(Math.random() * 100);
    randomNum2 = Math.round(Math.random() * 100);
    document.getElementById("number1").textContent = randomNum1;
    document.getElementById("number2").textContent = randomNum2;
};

lessThanButton.onclick = () => {
    if (randomNum1 < randomNum2) {
        score++;
        resetTimer();
    } else {
        location.href = "./gameover.html";
    }
    randomNum1 = Math.round(Math.random() * 100);
    randomNum2 = Math.round(Math.random() * 100);
    document.getElementById("number1").textContent = randomNum1;
    document.getElementById("number2").textContent = randomNum2;
};
equalToButton.onclick = () => {
    if (randomNum1 === randomNum2) {
        score++;
        resetTimer();
    } else {
        location.href = "./gameover.html";
    }
    randomNum1 = Math.round(Math.random() * 100);
    randomNum2 = Math.round(Math.random() * 100);
    document.getElementById("number1").textContent = randomNum1;
    document.getElementById("number2").textContent = randomNum2;
};

// Iteration 4: Build a timer for the game
function updateTimer() {
    timerId = setInterval(() => {
        time--;
        if (time === 0) {
            location.href = "./gameover.html";
        }
    timerId.innerText = time;
    localStorage.setItem("gameScore", score);           

    }, 1000);
}

updateTimer();

function resetTimer() {
    clearInterval(timerId);
    time = 6; 
    updateTimer();
}