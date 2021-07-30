class Target {
    constructor(centerX, centerY, radius){
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    drawTarget(ctx) {
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
}

// clicking target will make it disappear


// new circle will be drawn in a random location every # seconds

// if target not clicked within # seconds, it will disappear
// 

export default Target;