

var xoffset = 50;
var yoffset = 50;

var secs = 0;
var mins = 0;
var secD = .08;
var minD = .09;

var show=false;

function setup() {
  createCanvas(400, 400);
  //noLoop();
}
function draw() {
  //background(50,255,255,);
background(40,40);
  var s = second();
  var m = minute();


//seconds
push();
  translate(width/2,height/2) // shift it over
  fill(255,0,0);
  ellipse(0,0,15,15);  // draw an anchor
  rotate(radians(s*6)); //rotate on the shift
  translate(40,40); // shift from anchor
  scale(1.5,1.5);
  drawdots();
pop();


//mins
push();
  translate(width/2,height/2) // shift it over
  fill(255,255,0);
  ellipse(0,0,15,15);  // draw an anchor
  rotate(radians(m*6)); //rotate on the shift
  translate(100,40); // shift from anchor
  scale(.5,.5);
  drawhourdots();
//  drawhead();
pop();


secs+= secD;
mins+= minD;
fill(255);
// if show(){
// text('Current second: \n' + s, 5, 50);
//   text('Current minute: \n' + m, 5, 90);
// }
}

function drawdots(){
  noStroke();
  var m = minute();
//THIS IS A SPRIAL!!! WOO
   for(i=0; i<59; i++){
     push();
     //       20,0
     translate(-20,-20);
     rotate(radians((360/60 * i)));
        fill(10,240,10);//green
        //i*4 makes it look nice over all
        // but i*14 makes it more of a point on a clock
        ellipse(i* 14,15,10,10);//position 2
        pop();
                        }
    //the glow
    for(i=0; i<m; i++){
          push();
          translate(-20,-20);
          rotate(radians((360/60 * i)));
          //this i does nothing
                    //#+i
          fill(10,10,240+i,40);//blue
//this i location ofthe spiral
ellipse(i* 14,15,20,20);//position 2
          pop();
          }
}

function drawhourdots(){
  for(i=0; i<59; i++){
    push();
    //       20,0
    translate(-20,-20);
    rotate(radians((360/60 * i)));
       fill(10,240,10);//green
       //i*4 makes it look nice over all
       // but i*14 makes it more of a point on a clock
       ellipse(i* 14,15,10,10);//position 2
       pop();
                       }
   //the glow
   for(i=0; i<59; i++){
         push();
         translate(-20,-20);
         rotate(radians((360/60 * i)));
         //this i does nothing
                   //#+i
         fill(10,10,240+i,40);//blue
//this i location ofthe spiral
ellipse(i* 14,15,20,20);//position 2
         pop();
         }

}


function drawhead() {
  noFill();
  stroke(255);
  strokeWeight(8);
  ellipse(0,0, 40, 40);
  ellipse(0+100,0, 40, 40);
  arc(0+50, 0+50, 100, 50, 0, PI);
}
