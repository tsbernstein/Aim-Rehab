import Target from './scripts/targets'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const ctx = gameCanvas.getContext('2d');
    gameCanvas.width = innerWidth;
    gameCanvas.height = innerHeight;

    new Target(100, 100, 30).drawTarget(ctx);
})