const MAX_RADIUS = 20;
const NUM_POINTS = 100;
const DEPTH = 600;
var width, height;
var xcente, ycenter;
var actx;
var points = new Array(NUM_POINTS);

function init(){
    var canvasElement = document.getElementById("myCanvas");

    actx = canvasElement.getContext("2d");
    width = canvasElement.width;
    height = canvasElement.height;

    xcenter = width/2;
    ycenter = height/2;

    for(let i = 0; i<NUM_POINTS; i++){
        points[i] = new threeDPoint();
    }
    projection();
}

function projection(){
    actx.fillStyle = "#000000";
    actx.rect(0,0, width, height);
    actx.fill();

    for(let i = 0; i<NUM_POINTS; i++){
        points[i].z--;
        points[i].update();
        points[i].draw(actx);
    }

    requestAnimationFrame(projection);
}

function randomBetween(min, max) {
    if (min < 0) {
        return min + Math.random() * (Math.abs(min)+max);
    }
    else {
        return min + Math.random() * (max - min);
    }
}
