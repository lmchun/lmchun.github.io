let canvas;
// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(238,32,91,0.5)');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(paraticles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(238,32,91,0.15)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];
let img;
function preload(){

  // img=loadImage('logo.png');
}

function windowResized(){
    resizedCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
  textFont("Arial");
  // textSize(50);
}

function draw() {
  canvas=createCanvas(windowWidth, windowHeight);
  background(20);
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
  // textSize(50);
  // fill(255);
  // text("P5.js Summer Showcase!", 70, 200);
  // text("Welcome!", 230, 100);
  // fill(100);
  // textSize(25);
  //  text("Hosted by: ACM SIGGRAPH Student Chapter @ SJSU", 50, 260);
  //  image(img, 0,270);
}
