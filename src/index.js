import Game from './scripts/game'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const ctx = gameCanvas.getContext('2d');
    gameCanvas.width = innerWidth;
    gameCanvas.height = innerHeight;
    let scoreEl = document.getElementById('score-number');
    let game = new Game(gameCanvas.width, gameCanvas.height, ctx, gameCanvas, scoreEl);
    game.gameStart()
})