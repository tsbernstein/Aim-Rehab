import Target from './scripts/targets'
import Game from './scripts/game'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const ctx = gameCanvas.getContext('2d');
    gameCanvas.width = innerWidth;
    gameCanvas.height = innerHeight;
    let game = new Game(gameCanvas.width, gameCanvas.height, ctx, gameCanvas);
})