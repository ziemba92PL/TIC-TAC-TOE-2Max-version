const btnPlayerOne = document.getElementById("btn-player1");
const btnPlayerTwo = document.getElementById("btn-player2");
const btnCancel = document.getElementById("btn-cancel");
const playerNameField = document.getElementById("playername");
const btnConfirmPlayer = document.getElementById("btn-confirm-player");

let playerName = document.getElementById("playername");
let playerNumber = 0;

btnPlayerOne.addEventListener("click", () => {
  document.querySelector(".modal").style["display"] = "block";
  playerNumber = 1;
});

btnPlayerTwo.addEventListener("click", () => {
  document.querySelector(".modal").style["display"] = "block";
  playerNumber = 2;
});

btnCancel.addEventListener("click", () => {
  document.querySelector(".modal").style["display"] = "none";
});

btnConfirmPlayer.addEventListener("click", () => {
  if (playerNumber === 1) {
    let playerNameOne = playerName.value;
    document.getElementById("player-one-id").textContent = playerNameOne;
  }
  if (playerNumber === 2) {
    let playerNameTwo = playerName.value;
    document.getElementById("player-two-id").textContent = playerNameTwo;
  }
  document.querySelector(".modal").style["display"] = "none";
});
