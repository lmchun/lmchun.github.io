let canvas;
let img;
function preload(){
}

function windowResized(){
    resizedCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  // canvas.style('z-index', '-1');

}

function draw() {
  canvas=createCanvas(windowWidth, windowHeight);
  // background(20);

}

function keyPressed(){

}
