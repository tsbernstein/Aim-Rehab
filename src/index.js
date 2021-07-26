import Target from './scripts/targets'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const ctx = gameCanvas.getContext('2d');

    new Target(ctx).drawTarget(ctx);
})