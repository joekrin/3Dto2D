class threeDPoint{
    constructor(){
        this.x = randomBetween(-xcenter, xcenter);
        this.y = randomBetween(-ycenter, ycenter);
        this.z = randomBetween(100, DEPTH);
        this.radius = MAX_RADIUS;

        this.scaleProjected = 0;
        this.xProjected = 0;
        this.yProjected = 0;

        let r = parseInt(randomBetween(100,255));
        let g = parseInt(randomBetween(100, 255));
        let b = parseInt(randomBetween(100, 255));
        this.color = "rgb(" + r + "," + g + "," + b + ")";
    }

    update(){
        this.scaleProjected = DEPTH/(DEPTH+this.z);
        this.xProjected = (this.x * this.scaleProjected) + xcenter;
        this.yProjected = (this.y * this.scaleProjected) + ycenter;
     }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xProjected, this.yProjected, this.radius, 0, Math.PI * 2 , true);
        ctx.fill();
    }


}