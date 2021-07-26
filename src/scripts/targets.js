class Target {
    constructor(ctx){

    }

    drawTarget(ctx) {
        ctx.beginPath();
        ctx.arc(240, 160, 20, 0, Math.PI*2, false)
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }
}


export default Target;