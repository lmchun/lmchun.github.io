let img;
let systems;
let overshovel = false;
let overwatering = false;
let overseeds = false;
let overdirt1 = false;

//not sure if this applies still
let a =0;
//alphas
let alpha1  =0;
let alpha2 =0;
let alpha3 =0;
let alpha4 =0;

//inital checks if the dirt has been.....
//dirt pile 1
let shoveled1 = false;
let seeded1   = false;
let watered1  = false;
//dirt pile 2
let shoveled2 = false;
let seeded2   = false;
let watered2  = false;

let waterAgain = false;
let waterTimes = 0;

let waterselect  = false;
let shovelselect = false;
let seedselect   = false;

let watx = 480;
let waty = 0;

let shox = 580;
let shoy = 0;

let sedx = 350;
let sedy = 0;

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
  img1  = loadImage('img/poppy.png');
  img2  = loadImage('img/watering_can_temp.png');
  img3  = loadImage('img/shovel.png');
  img4  = loadImage('img/dirt_pile.png');
  img5  = loadImage('img/bag_seeds.png');
  img6  = loadImage('img/dirt_pile_smol.png');
  img7  = loadImage('img/bag_seeds_smol.png');
  img8  = loadImage('img/sprout_stage1.png');
  img9  = loadImage('img/sprout_stage2.png');
  img10 = loadImage('img/sprout_stage3.png');
  img11 = loadImage('img/sprout_stage4.png');
  img12 = loadImage('img/check_mark.png');
  fontInstruct= loadFont("font/Mulish-Regular.ttf");
}

function setup() {
  cnv = createCanvas(700, 500);
  cnv.position(100, 100);
  textFont(fontInstruct);
  textSize(22);
  //position of the particle effect
  system = new ParticleSystem(createVector(width / 2, 50));
  system2 = new ParticleSystem2(createVector(width / 2, 50));
  system3 = new ParticleSystem3(createVector(width / 2, 50));
  frameRate(100);
}

function draw() {
  background(51);
  fill(255);
  text("1.First dig a hole with the shovel.", 10, 34);
  text("2.Second plant a seed.", 10, 58);
  text("3.Third water your plant!", 10, 82);

  cursorIcon();
  toolbar();
  //checkxy();
  dirt();

  if (waterselect == true) {
    if (mouseIsPressed == true) {
      // push();
      // rotate(TWO_PI * noise(0.01*frameCount + 10));
      // image(img2, mouseX-45, mouseY-40)
      // pop();
      system.addParticle();
      system.run();
      //print('watering from the wateringcan');
      //this shows that the plants have been watered checking it off as a requirement to grow
      watered1 = true;
      watered2 = true;
      print(watered1, watered2);
    }
  }
  if (shovelselect == true) {
    if (mouseIsPressed == true) {
      system2.addParticle();
      system2.run();
      //print('dirt being shovel');
      if(mouseX > dirtx1  &&
      mouseX < dirtx1 + 211 &&
      mouseY > dirty1  &&
      mouseY < dirty1 + 110){
      shoveled1 = true;
      print('shoveled checked1');
      }
      if(mouseX > dirtx2  &&
      mouseX < dirtx2 + 211 &&
      mouseY > dirty2  &&
      mouseY < dirty2 + 110){
      shoveled2 = true;
      print('shoveled checked2');
      }
    }
  }
  if (seedselect == true) {
    if (mouseIsPressed == true) {
      system3.addParticle();
      system3.run();
      //print('planting seeds!');
      if(mouseX > dirtx1  &&
      mouseX < dirtx1 + 211 &&
      mouseY > dirty1 - 70 &&
      mouseY < dirty1 + 110){
      seeded1 = true;
      print('seed checked1');
      }
      if(mouseX > dirtx2  &&
      mouseX < dirtx2 + 211 &&
      mouseY > dirty2 - 70  &&
      mouseY < dirty2 + 110){
      seeded2 = true;
      print('seed checked2');
      }
    }
  }
  //sprouting();
  //planted();


  if(seeded1 && seeded2){
    image(img12,sedx,sedy);
  }
  if(watered1 && watered2){
    image(img12,shox,shoy);
  }
  if(shoveled1 && shoveled2){
    image(img12,watx-10,waty);
  }
}

function mousePressed() {
  //toolbar functions
  //shovel
  if (overshovel == true) {
    shovelselect = true;
    //print("shovel is now selected");

    waterselect = false;
    seedselect = false;
  }
  //watercan
  if (overwatering == true) {
    waterselect = true;

    shovelselect = false;
    seedselect = false;
  }
  //seed bag
  if (overseeds == true) {
    seedselect = true;

    shovelselect = false;
    waterselect = false;
  }
}

function toolbar() {
  fill(220, 100);
  rect(0, 0, width, 100);
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

// function sprouting(){
//
//   //seed stage 1
//   tint(255, a);
//   image(img8, 100,20);
//   //seed stage 2
//   tint(255, a2);
//   image(img9, 100,20);
//   //seed stage 3
//   tint(255, a3);
//   image(img10, 100,20);
//   //seed stage 4
//   tint(255, a4);
//   image(img11, 100,20);
//
// //alpha 1
//   //fade in
//   if(frameCount < 299){
//     if(frameCount < 255){
//       if(a<255){
//       a++;
//       }
//     }
//   }else {
//     //fade out
//     if(frameCount > 300){
//       if(a>0){
//       a-=2;
//       }
//     }
//   }
// ////for alpha 2
//   //refering to switching to after alpha 1
//     //happens after 300 since that is parameters for alpha 1
//   // if(frameCount > 301){
//
//   //   if(frameCount < 345){
//   //     if(frameCount > 301{
//   //       if(a2<300){
//   //         a2++;
//   //       }
//   //     }
//   //   }else {
//   //     if(frameCount < 345){
//   //       if(a2>0){
//   //         a2-=2;
//   //       }
//   //     }
//   //   }
//   // }
//   //image();
//
//
//   tint(255,255);
// }



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
  image(img4, width / 6, 360);
  //dirt_pile2
  image(img4, width / 3 + width / 6, 360);
}

// function growth (){
//   // Constrain the alphas
//   	alpha1 = constrain(a,0,255);
//   	alpha2 = constrain(a,0,255);
//   	alpha3 = constrain(a,0,255);
//   	alpha4 = constrain(a,0,255);
// //this is to check if it has been watered and seeded and shoveled
//   if(shoveled1 && seeded1 && watered1){
//     if(waterTimes < 0){
//     			alpha1++;
//     		}else if(0<waterTimes<2){ //If we're at stage0 and we watered again....
//     			alpha1--; // Fade out stage0;
//     			alpha2++; // Fade in Stage1
//     		}else if(1<waterTimes<3){ //Repeat
//     			alpha2--; //Fade out
//     			alpha3++; //Fade in
//     		}else if(2<waterTimes<4){
//     			alpha3--;
//     			alpha4++;
//     		}
//         push();
// 		      tint(255,alpha1);
// 		      image(sprout_stage1);
// 		      tint(255,alpha2);
// 		      image(sprout_stage2);
// 		      tint(255,alpha3);
// 		      image(sprout_stage3);
// 		      tint(255,alpha4);
// 		      image(sprout_stage4);
// 		    pop();
// 	 }
//   if(mouseIsPressed == true){
// 		// If the alpha0 is at max and we watered again (Note you decide when to make water again true)
// 		if(alpha1 >= 255 && waterAgain = true){
// 			waterTimes = 1; //go to one
// 			waterAgain = false; //Make water Again false
// 		}else if(alpha2 >= 255 && waterAgain = true){
//        // If alpha1 is at max
// 			waterTimes = 2; // go to two
// 			waterAgain = false; // Reset
// 		}else if(alpha3 >= 255 && waterAgain = true){ //Repeat
// 			waterTimes = 3;
// 			waterAgain = false;
// 		}
// 	}
// }


///////////////////CHECK //////////////////////////////
function checkxy() {
   //fill(255,0,0);
  // ellipse(mouseX,mouseY, 10,10);
//  print(mouseX, mouseY);

  //watering can
  //green
  fill(0, 255, 0, 100);
  rect(shox, shoy, 103, 100);
  noStroke();
  //shovel
  //blue
  fill(0, 0, 255, 100);
  rect(watx, waty, 85, 100);
  noStroke();

  //bag_seeds
  fill(255, 25, 25, 100);
  rect(sedx, sedy, 100, 100);
  noStroke();

  // fill(255,0,0);
  // ellipse(shox,shoy,10,10);
  // ellipse(watx,waty,10,10);
  //ellipse(sedx,sedy,10,10
  rect(dirtx1, dirty1, 211,110);
  rect(dirtx2, dirty2, 211,110);


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

    if(this.particles2.length <25){
      let p = this.particles2[i];
      p.run();
      if (p.isDead()) {
       this.particles2.splice(i, 1);
      }

    }else{
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
