import Target from './scripts/targets'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const ctx = gameCanvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(200, 100, 10, 0, Math.PI*2, false)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePatch();
})