// Iteration 5: Store the player score and display it on the game over screen
let Store=localStorage.getItem("gameScore");
let scoreBox=document.getElementById("score-board").innerText=Store
document.getElementById("play-again-button").onclick = () => {
    location.href = "./game.html";
}