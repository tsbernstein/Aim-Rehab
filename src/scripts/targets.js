
class Target {
    constructor(){
        this.genTarget = genTarget();
    }

    genTarget(){
        ctx.beginPath();
        ctx.arc(240, 160, 20, 0, Math.PI*2, false)
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePatch();
    }
}

export default Target;