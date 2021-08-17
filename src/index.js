import Game from './scripts/game'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const ctx = gameCanvas.getContext('2d');
    gameCanvas.width = innerWidth;
    gameCanvas.height = innerHeight;
    let scoreEl = document.getElementById('score-number');
    let gameTime = document.getElementById('game-time');
    const modalEl = document.getElementById('modal-container')
    const gameStartEl = document.getElementById('start-game');
    const finalScoreEl = document.getElementById('final-score-el');
    gameStartEl.addEventListener('click',
        e => {
                let game = new Game(gameCanvas.width, gameCanvas.height, ctx, gameCanvas, scoreEl, gameTime, modalEl, finalScoreEl);
                game.gameStart();
                modalEl.style.display = 'none';
            }
    )
})