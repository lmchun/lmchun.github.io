let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;

let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;

let seedsoundconfirm;
let watersoundconfirm;
let shovelsoundconfirm;

let systems;
let overshovel = false;
let overwatering = false;
let overseeds = false;
let overdirt1 = false;

//not sure if this applies still
let a = 0;
//alphas
let alpha1 = 0;
let alpha2 = 0;
let alpha3 = 0;
let alpha4 = 0;

//inital checks if the dirt has been.....
//dirt pile 1
let shoveled1 = false;
let seeded1 = false;
let watered1 = false;
//dirt pile 2
let shoveled2 = false;
let seeded2 = false;
let watered2 = false;

let waterAgain = false;
let waterTimes = 0;

let waterselect = false;
let shovelselect = false;
let seedselect = false;

let watx = 480;
let waty = 0;

let shox = 580;
let shoy = 0;

let sedx = 350;
let sedy = 0;

let widthC = 700;

let dirtx1 = 125;
let dirty1 = 374;
let dirtx2 = 363;
let dirty2 = 374;

let cnv;
let system;
let system2;
let system3;
let option;
let fontInstruct;



function preload() {
  // img1 = loadImage('img/poppy.png');
  img2 = loadImage('img/water.png');
  img3 = loadImage('img/shovel.png');
  img4 = loadImage('img/dirt_pile.png');
  img5 = loadImage('img/bag_seeds.png');
  img6 = loadImage('img/dirt_pile_smol.png');
  img7 = loadImage('img/bag_seeds_smol.png');
  img10 = loadImage('img/sprout_stage3.png');
  img11 = loadImage('img/sprout_stage4.png');
  img12 = loadImage('img/check_mark.png');
  fontInstruct = loadFont("font/Mulish-Regular.ttf");
  sound1 = loadSound("audio/grabbing_watering_can.mp3");
  sound2 = loadSound("audio/watering.mp3");
  sound3 = loadSound("audio/shovel_pickup.mp3");
  sound4 = loadSound("audio/shoveling.mp3");
  sound5 = loadSound("audio/planting.mp3");
  sound6 = loadSound("audio/seeding.mp3");
}

function setup() {
  cnv = createCanvas(700, 500);
  cnv.position(100, 100);
  textFont(fontInstruct);
  textSize(22);
  system = new ParticleSystem(createVector(widthC / 2, 50));
  system2 = new ParticleSystem2(createVector(widthC / 2, 50));
  system3 = new ParticleSystem3(createVector(widthC / 2, 50));
  //frameRate(100);

  sound1.setVolume(0.25);
  sound2.setVolume(0.25);
  sound3.setVolume(0.25);
  sound4.setVolume(0.25);
  sound5.setVolume(0.25);
  sound6.setVolume(0.25);
}

function draw() {
  background(51);
  fill(255);
  text("1.First dig a hole with the shovel.", 10, 34);
  text("2.Second plant a seed.", 10, 58);
  text("3.Third water your plant!", 10, 82);

  cursorIcon();
  toolbar();
  dirt();

  if (waterselect == true) {
    if (mouseIsPressed == true) {
      system.addParticle();
      system.run();
      //print('watering from the wateringcan');
      //this shows that the plants have been watered checking it off as a requirement to grow
      if (mouseX > 477 - 100 &&
        mouseX < 477 + 100 &&
        mouseY > 154 - 125 &&
        mouseY < 154 + 125) {
        watered1 = true;
        watered2 = true;
      }
    }
  }
  if (shovelselect == true) {
    if (mouseIsPressed == true) {
      system2.addParticle();
      system2.run();
      //print('dirt being shovel');
      if (mouseX > dirtx1 &&
        mouseX < dirtx1 + 211 &&
        mouseY > dirty1 &&
        mouseY < dirty1 + 110) {
        shoveled1 = true;
      }
      if (mouseX > dirtx2 &&
        mouseX < dirtx2 + 211 &&
        mouseY > dirty2 &&
        mouseY < dirty2 + 110) {
        shoveled2 = true;
      }
    }
  }
  if (seedselect == true) {
    if (mouseIsPressed == true) {
      system3.addParticle();
      system3.run();
      //print('planting seeds!');
      if (mouseX > dirtx1 &&
        mouseX < dirtx1 + 211 &&
        mouseY > dirty1 - 70 &&
        mouseY < dirty1 + 110) {
        seeded1 = true;
      }
      if (mouseX > dirtx2 &&
        mouseX < dirtx2 + 211 &&
        mouseY > dirty2 - 70 &&
        mouseY < dirty2 + 110) {
        seeded2 = true;
      }
    }
  }

  //for check marks
  if (seeded1 && seeded2) {
    image(img12, sedx, sedy);
  }
  if (watered1 && watered2) {
    image(img12, shox, shoy);
  }
  if (shoveled1 && shoveled2) {
    image(img12, watx - 10, waty);
  }

  if (shoveled1 && seeded1 && watered1) {
    image(img10, dirtx1 + 35, 200);
  }
  if (shoveled2 && seeded2 && watered2) {
    image(img10, dirtx2 + 35, 200);
  }
}

function mousePressed() {
  //toolbar functions
  //shovel
  if (overshovel == true) {
    shovelselect = true;
    sound3.play();
    //print("shovel is now selected");

    waterselect = false;
    seedselect = false;
  }
  //watercan
  if (overwatering == true) {
    waterselect = true;
    sound1.play();

    shovelselect = false;
    seedselect = false;
  }
  //seed bag
  if (overseeds == true) {
    seedselect = true;
    sound5.play();
    shovelselect = false;
    waterselect = false;
  }
}

function toolbar() {
  fill(220, 100);
  rect(0, 0, widthC, 100);
  image(img2, shox, shoy);
  image(img3, watx, waty);
  image(img5, sedx, sedy);
  //to check if the mouse is over the shovel or watering can or seed bag_seeds

  if (
    mouseX > watx - 0 &&
    mouseX < watx + 85 &&
    mouseY > waty - 0 &&
    mouseY < waty + 100
  ) {
    overshovel = true;
    //  print("touching the shovel!");
    rect(watx, waty, 85, 100);
    stroke(255, 255, 25);
  } else {
    overshovel = false;
    noStroke();
  }
  if (
    mouseX > shox - 0 &&
    mouseX < shox + 103 &&
    mouseY > shoy - 0 &&
    mouseY < shoy + 100
  ) {
    overwatering = true;
    //print("touching the watering can!");
    rect(shox, shoy, 103, 100);
    stroke(255, 255, 25);
  } else {
    overwatering = false;
    noStroke();
  }
  if (
    mouseX > sedx - 0 &&
    mouseX < sedx + 85 &&
    mouseY > sedy - 0 &&
    mouseY < sedy + 85
  ) {
    overseeds = true;
    rect(sedx, sedy, 103, 100);
    //  stroke(255,255,25);
    //print("touching the seed bag!");
  } else {
    overseeds = false;
    noStroke();
  }
}

function cursorIcon() {
  //switches the icons
  if (shovelselect == true) {
    //the image changes to the shovel
    image(img3, mouseX - 25, mouseY - 60);
  } else if (waterselect) {
    image(img2, mouseX - 45, mouseY - 40);
  } else if (seedselect) {
    //defaults to the shovel
    image(img5, mouseX - 45, mouseY - 40)
  }
  // else {
  //   image(img3, mouseX - 25, mouseY - 60);
  // }
}

function dirt() {
  //dirt_pile1
  image(img4, widthC / 6, 360);
  //dirt_pile2
  image(img4, widthC / 3 + widthC / 6, 360);
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
Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(150, 180, 250, this.lifespan);
  strokeWeight(1);
  fill(100, 150, 250, this.lifespan);
  ellipse(this.position.x + mouseX - 390, this.position.y + mouseY - 65, 5, 8);

};

// Is the particle still useful?
Particle.prototype.isDead = function() {
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
  for (let i = this.particles.length - 1; i >= 0; i--) {
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
  this.velocity = createVector(random(-3, 3), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle2.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle2.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle2.prototype.display = function() {
  stroke(150, 180, 250, this.lifespan);
  strokeWeight(1);
  fill(100, 150, 250, this.lifespan);
  image(img6, this.position.x + mouseX - 390, this.position.y + mouseY - 35);

};

// Is the particle still useful?
Particle2.prototype.isDead = function() {
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
  for (let i = this.particles2.length - 1; i >= 0; i--) {
    //  print(this.particles2.length);

    if (this.particles2.length < 25) {
      let p = this.particles2[i];
      p.run();
      if (p.isDead()) {
        this.particles2.splice(i, 1);
      }

    } else {
      this.particles2.length = 4;
      return;
    }
    // let p = this.particles2[i];
    // p.run();
    // if (p.isDead()) {
    //   this.particles2.splice(i, 1);
    // }
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
Particle3.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle3.prototype.display = function() {
  stroke(150, 77, 5, this.lifespan);
  strokeWeight(1);
  fill(84, 43, 3, this.lifespan);
  ellipse(this.position.x + mouseX - 390, this.position.y + mouseY - 65, 8, 8);
};

// Is the particle still useful?
Particle3.prototype.isDead = function() {
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
  for (let i = this.particles3.length - 1; i >= 0; i--) {
    let p = this.particles3[i];
    p.run();
    if (p.isDead()) {
      this.particles3.splice(i, 1);
    }
  }
}
