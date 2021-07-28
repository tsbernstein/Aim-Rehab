import Target from './targets'

class Game {
    constructor(canvasWidth, canvasHeight, ctx){
        this.targets = [];
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.ctx = ctx;
        this.randomTargets();
        this.spawnTargets();

        this.randomTargets = this.randomTargets.bind(this)
        this.spawnTargets = this.spawnTargets.bind(this)
    }

    randomTargets(){
        let randomX = Math.floor(Math.random() * (this.canvasWidth - 30)) + 30;
        let randomY = Math.floor(Math.random() * (this.canvasHeight - 30)) + 30;

        this.targets.push(new Target(randomX, randomY, 30))
    }

    spawnTargets(){
        const populateTargets = function() {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
            this.randomTargets();
            let target = this.targets.pop();
            target.drawTarget(this.ctx)
        }.bind(this)

        setInterval(populateTargets, 3000)
    }

    // addEventListener('click', e => {
    //     this.targets.pop()
    // }

    gameStart(){

    }

    gameOver(){

    }

    score(){

    }
}

// rounds will last 1 minute
// start game
// clicking target will add a point to the score

export default Game;