import Target from './targets'

class Game {
    constructor(canvasWidth, canvasHeight, ctx, canvas, scoreEl, gameTimeEl, modalEl, finalScoreEl){
        this.targets = [];
        this.score = 0;
        this.scoreEl = scoreEl;
        this.modalEl = modalEl;
        this.gameTime = 10;
        this.gameTimeEl = gameTimeEl;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.ctx = ctx;
        this.canvas = canvas;
        this.finalScoreEl = finalScoreEl;
        this.randomTargets();
        this.spawnTargets();
        this.cursorPos = this.getCursorPos();
        this.targetPos = this.getTargetPos();
        this.hitCheck = this.hitCheck.bind(this);
        this.canvas.addEventListener('click',
            this.hitCheck
        )
        this.scoreEl.innerHTML = this.score;
        this.gameTimeEl.innerHTML = this.gameTime;
        this.randomTargets = this.randomTargets.bind(this);
        this.spawnTargets = this.spawnTargets.bind(this);
        this.getTargetPos = this.getTargetPos.bind(this);
        this.getCursorPos = this.getCursorPos.bind(this);
        // this.animate = this.animate.bind(this);
    }

    randomTargets(){
        let randomX = Math.floor(Math.random() * (this.canvasWidth - 60) + 30);
        let randomY = Math.floor(Math.random() * (this.canvasHeight - 60) + 30);

        this.targets.push(new Target(randomX, randomY, 30))
    }

    spawnTargets(){
        const populateTargets = function() {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.currentTarget = this.targets.shift();
            this.currentTarget.drawTarget(this.ctx);
            this.randomTargets();
        }.bind(this)

        populateTargets();
    }

    getTargetPos(){
        const rect = this.canvas.getBoundingClientRect();
        let x = this.currentTarget.centerX - rect.left;
        let y = this.currentTarget.centerY - rect.top;
        this.targetPos = [x, y];
    }

    getCursorPos() {
        this.canvas.addEventListener('click',
            e => {
                const rect = this.canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                this.cursorPos = [x, y];
            }
        )
    }

    hitCheck() {
        this.getCursorPos();
        this.getTargetPos();
        const cursorX = this.cursorPos[0];
        const cursorY = this.cursorPos[1];
        const targetX = this.targetPos[0];
        const targetY = this.targetPos[1];
        if (Math.hypot((cursorX - targetX), (cursorY - targetY)) < 30){
            this.spawnTargets();
            this.score++;
            this.scoreEl.innerHTML = this.score;
        }
    }

    // animate(currentTime) {
    //     let animationId = requestAnimationFrame(this.animate);
    //     let timeLeft = Math.ceil(this.gameTime - (currentTime / 1000));
    //     this.gameTimeEl.innerHTML = timeLeft;
    //     console.log(currentTime);
    //     if (timeLeft === 0) {
    //         this.gameOver(animationId);
    //     }
    // }

    timer(intervalId) {
        if (this.gameTime === 0) {
            this.finalScoreEl.innerHTML = this.score;
            this.gameOver();
            clearInterval(intervalId);
        } else {
            this.gameTime--;
            this.gameTimeEl.innerHTML = this.gameTime;
        }
    }

    gameStart(){
        // this.animate();
        let intervalId = setInterval(() => {
            this.timer(intervalId)
        }, 1000); 
    }

    gameOver(){
        // cancelAnimationFrame(animationId);
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.modalEl.style.display = 'flex';
    }
}

export default Game;