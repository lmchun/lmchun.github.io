var balls = [];
var total = 50;
var paddle;
var score = 0;
var lives = 3;

function setup() {
  createCanvas(500, 450);
  paddle = new Paddle();
 for (var i=0;i<total; i++){
   balls[i] = new Ball(paddle);
 }

}

function draw() {
  background(0);
  for (var i=0; i<balls.length; i++){
  balls[i].update();
  balls[i].render();
  }
  paddle.update();
  paddle.render();
}

function keyPressed(){
 if(keyCode == LEFT_ARROW){
    paddle.moveLeft();
    }else if(keyCode == RIGHT_ARROW)
    {
    paddle.moveRight();
    }
}

function Ball(paddle){
  this.paddle = paddle;
  this.size =  20;
  this.speed = 3;

  this.init = function (){
    this.y = random(-height,-20);
    this.x = random(20, width-20);
      this.bad = random(0,100) < 5;
 //< # is the percentage of a chance of this instance
  }

  this.render = function (){
    if(this.bad){
    fill(255,random(255),random(255));
    }else{
       fill(random(255));
    }
    noStroke();
    ellipse(this.x,this.y,this.size,this.size);
    }

  this.update = function() {
   this.y += this.speed;
   this.testPaddle();
    if (this.y - this.size > height){
      this.init();
    }
  }
   this.testPaddle = function(){
     var top    = (this.y +this.size/2 > this.paddle.y);
     var bottom = (this.y +this.size/2 < this.paddle.y+ this.paddle.height);
     var left   = (this.x- this.size/2 > this.paddle.x);
     var right  = (this.x + this.size/2 < this.paddle.x + this.paddle.width);
    if(top && bottom && left && right){
      if(this.bad){
      this.paddle.hit();
      }else{
       this.paddle.score();
      }
      this.init();
    }
   }
     this.init();

}

function Paddle(){
  this.width = 50;
  this.height= 20;
  this.speed = 10;
  this.x = width/2 - this.width/2;
  this.y = height - 30;
  this.color = color(255);

  this.update = function(){

  }

  this.score = function(){
    this.color= color(0,255,0);
    score++;
    this.width +=5;
  }

  this.hit = function (){
    this.color = color(255,0,0);
    lives--;
    this.width -= 10;
  }

  this.render = function(){
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    this.color = color(255);
  }

  this.moveRight = function(){
    this.x += this.speed;
    if(this.x +this.width > width){
      this.x = width - this.width;
    }
  }

  this.moveLeft = function(){
    this.x -= this.speed;
    if(this.x < 0 ){
       this.x =0;
       }
  }
}
