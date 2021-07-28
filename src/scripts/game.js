import Target from './targets'

class Game {
    constructor(canvasWidth, canvasHeight, ctx, canvas){
        this.targets = [];
        this.score = 0;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.ctx = ctx;
        this.canvas = canvas;
        this.randomTargets();
        this.spawnTargets();
        this.getCursorPos();
        this.getTargetPos();
        this.breakTarget(this.getCursorPos(), this.getTargetPos());

        this.randomTargets = this.randomTargets.bind(this)
        this.spawnTargets = this.spawnTargets.bind(this)
    }

    randomTargets(){
        let randomX = Math.floor(Math.random() * (this.canvasWidth - 30)) + 30;
        let randomY = Math.floor(Math.random() * (this.canvasHeight - 35)) + 35;

        this.targets.push(new Target(randomX, randomY, 30))
    }

    spawnTargets(){
        const populateTargets = function() {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.randomTargets();
            let target = this.targets.shift();
            target.drawTarget(this.ctx);
        }.bind(this)

        setInterval(populateTargets, 3000)
    }

    getTargetPos(){
        let currentTarget = function(){
            let x = this.targets.slice(-1)[0].centerX;
            let y = this.targets.slice(-1)[0].centerY;
            return [x, y];
        }.bind(this);
        setInterval(currentTarget, 3000)
        // return [x, y];
    }

    //     this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight))

    getCursorPos() {
        this.canvas.addEventListener('click',
            e => {
                const rect = this.canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                return [x, y];
            }
        )
    }

    breakTarget(cursorPos, targetPos){
        if(!cursorPos) return null;
        if(!targetPos) return null;
        const cursorX = cursorPos[0];
        const cursorY = cursorPos[1];
        const targetX = targetPos[0];
        const targetY = targetPos[1];
        if (Math.sqrt((cursorX - targetX) * (cursorX - targetX) + (cursorY - targetY) * (cursorY - targetY)) < 30){
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        }
    }

    gameStart(){

    }

    gameOver(){

    }
}

// rounds will last 1 minute
// start game
// clicking target will add a point to the score

export default Game;