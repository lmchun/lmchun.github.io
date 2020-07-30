let img;
let systems;
let overshovel   = false;
let overwatering = false;
let overseeds = false;
let overdirt1 = false;

let waterselect = false;
let shovelselect = false;
let seedselect = false;

let watx =480;
let waty = 0;

let shox = 580;
let shoy =  0;

let sedx = 350;
let sedy = 0;

let cnv;
let system;
let system2;
let system3;
let option;

function preload(){
img1  = loadImage('img/poppy.png');
img2 = loadImage('img/watering_can_temp.png');
img3 = loadImage('img/shovel.png');
img4 = loadImage('img/dirt_pile.png');
img5 = loadImage('img/bag_seeds.png');
img6 = loadImage('img/dirt_pile_smol.png');
img7 = loadImage('img/bag_seeds_smol.png');
}

function setup() {
  cnv = createCanvas(700, 500);
  cnv.position(100,100);
                                    //position of the particle effect
  system = new ParticleSystem(createVector(width / 2, 50));
  system2 = new ParticleSystem2(createVector(width / 2, 50));
  system3 = new ParticleSystem3(createVector(width / 2, 50));

}

function draw() {
  background(51);
  cursorIcon();

  if (option == 0) {
    fill(255);
    textAlign(CENTER);
    textSize(29);
    text("click on the plots of land to dig a hole to plant a seed", width / 2, height / 2);
  }

  toolbar();
  checkxy();
  dirt();
  if(waterselect==true){
    if(mouseIsPressed == true){
      // push();
      // rotate(TWO_PI * noise(0.01*frameCount + 10));
      // image(img2, mouseX-45, mouseY-40)
      // pop();
      system.addParticle();
      system.run();
    }
  }
  if(shovelselect==true){
    if(mouseIsPressed == true){
      // push();
      // rotate(TWO_PI * noise(0.01*frameCount + 10));
      // image(img2, mouseX-45, mouseY-40)
      // pop();
      system2.addParticle();
      system2.run();
    }
  }
  if(seedselect==true){
    if(mouseIsPressed == true){
      // push();
      // rotate(TWO_PI * noise(0.01*frameCount + 10));
      // image(img2, mouseX-45, mouseY-40)
      // pop();
      system3.addParticle();
      system3.run();
    }
  }
}

function mousePressed() {
//toolbar functions
  //shovel
  if(overshovel == true){
    shovelselect = true;
    waterselect = false;
    seedselect = false;
  }
  //watercan
  if(overwatering == true){
    waterselect = true;
    shovelselect = false;
    seedselect = false;
  }
  if(overseeds == true){
    seedselect = true;
    shovelselect = false;
    waterselect = false;
  }
//digging up the dirt
//watering dirt
  // if(overdirt1){
  //   //digging up the dirt
  //   if(shovelselect){
  //
  //   }
  //   //watering dirt
  //   if(waterselect){
  //     //translate(this.position.x, this.position.y);
  //     //   rotate(this.theta);
  //   }
  //  }



}

function toolbar(){
  fill(220, 100);
  rect(0,0,width, 100);
  image(img2, shox,shoy);
  image(img3,watx,waty);
  image(img5, 350,0);
//to check if the mouse is over the shovel or watering can
  if (
      mouseX > watx - 0 &&
      mouseX < watx + 85 &&
      mouseY > waty - 0 &&
      mouseY < waty + 100
    ) {
      overshovel = true;
      print("touching the shovel!");
      rect(watx,waty, 85, 100);
      stroke(255,255,25);
  }else{
    overshovel = false;
    overwatering = false;
    overseeds = false;
    noStroke();
  }
  if (
      mouseX > shox - 0 &&
      mouseX < shox + 103 &&
      mouseY > shoy - 0 &&
      mouseY < shoy + 100
    ) {
      overwatering = true;
      print("touching the watering can!");
      rect(shox,shoy, 103, 100);
      stroke(255,255,25);
      }
      else{
        overwatering = false;
        overseeds = false;
        overshovel = false;
        noStroke();
      }
  if (
      mouseX > sedx - 0 &&
      mouseX < sedx + 85 &&
      mouseY > sedy - 0 &&
      mouseY < sedy + 85
    ) {
      overseeds = true;
      rect(sedx,sedy, 103, 100);
      stroke(255,255,25);
      print("touching the seed bag!");
    }
    else{
      overseeds = false;
      overwatering = false;
      overshovel = false;
      noStroke();
    }
}

function dirt(){
  image(img4, width/6,360);
  image(img4, width/3 + width/6 ,360);
}

function cursorIcon(){
//switches the icons
  if(shovelselect == true ){
    //the image changes to the shovel
    image(img3, mouseX-45, mouseY-130);
  }else if(waterselect){
    image(img2, mouseX-45, mouseY-40);
  }else if(seedselect){
//defaults to the shovel
  image(img5, mouseX-45, mouseY-40)
  } else {
    image(img3, mouseX-45, mouseY-40);
  }
}


///////////////////CHECK //////////////////////////////
function checkxy(){
  // fill(255,0,0);
  // ellipse(mouseX,mouseY, 10,10);
  // print(mouseX, mouseY);

//watering can
        //green
  fill(0,255,0, 100);
  rect(shox,shoy, 103, 100);
  noStroke();
//shovel
        //blue
  fill(0,0,255,100);
  rect(watx,waty, 85, 100);
  noStroke();

//bag_seeds
  fill(255,25,25,100);
  rect(sedx, sedy, 100, 100);
  noStroke();

// fill(255,0,0);
// ellipse(shox,shoy,10,10);
// ellipse(watx,waty,10,10);
//ellipse(sedx,sedy,10,10);
}

////////////////PARTICLE WATER EFFECT///////////////////////////
let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-5, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(150,180,250, this.lifespan);
  strokeWeight(1);
  fill(100,150,250, this.lifespan);
  ellipse(this.position.x+mouseX - 390, this.position.y+mouseY -65, 12, 12);

};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
                    //delays particle effect from starting
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
}
///////////DIRT PARTICLES///////////////
let Particle2 = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle2.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle2.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle2.prototype.display = function() {
  stroke(150,180,250, this.lifespan);
  strokeWeight(1);
  fill(100,150,250, this.lifespan);
  image(img6, this.position.x+mouseX - 390, this.position.y+mouseY -65);

};

// Is the particle still useful?
Particle2.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem2 = function(position) {
  this.origin = position.copy();
  this.particles2 = [];
};

ParticleSystem2.prototype.addParticle = function() {
  this.particles2.push(new Particle2(this.origin));
};

ParticleSystem2.prototype.run = function() {
  for (let i = this.particles2.length-1; i >= 0; i--) {
    let p = this.particles2[i];
    p.run();
    if (p.isDead()) {
      this.particles2.splice(i, 1);
    }
  }
}
//////////////////SEEDS///////////////////////////
let Particle3 = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle3.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle3.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle3.prototype.display = function() {
  stroke(150,77,5, this.lifespan);
  strokeWeight(1);
  fill(84,43,3, this.lifespan);
  ellipse(this.position.x+mouseX - 390, this.position.y+mouseY -65,8,8);
};

// Is the particle still useful?
Particle3.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem3 = function(position) {
  this.origin = position.copy();
  this.particles3 = [];
};

ParticleSystem3.prototype.addParticle = function() {
  this.particles3.push(new Particle3(this.origin));
};

ParticleSystem3.prototype.run = function() {
  for (let i = this.particles3.length-1; i >= 0; i--) {
    let p = this.particles3[i];
    p.run();
    if (p.isDead()) {
      this.particles3.splice(i, 1);
    }
  }
}
