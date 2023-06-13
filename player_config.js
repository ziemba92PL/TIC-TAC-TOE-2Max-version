const btnPlayerOne = document.getElementById('btn-player1');
const btnPlayerTwo = document.getElementById('btn-player2');
const btnCancel = document.getElementById('btn-cancel');
const playerNameField = document.getElementById('playername');
const btnConfirm = document.getElementById('btn-confirm');
let playerOneName = "";
let playerNumber = 0;

btnPlayerOne.addEventListener('click', () =>{
    document.querySelector('.modal').style['display'] = 'block';
    playerNumber = 1;
});

btnPlayerTwo.addEventListener('click', () => {
    document.querySelector('.modal').style['display'] = 'block';
    playerNumber = 2;
})

btnCancel.addEventListener('click', () => {
    document.querySelector('.modal').style['display'] = 'none';
});

btnConfirm.addEventListener('click', () => {
    
})