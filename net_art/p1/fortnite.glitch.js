var img;
var bx;
var by;
var overBox=false;
var locked =false;
//var xOffset=0.0; 
//var yOffset=0.0;
//var glitch_b=false;
//var glitch_c=false;
//var glitch_a=false;


function preload(){
img=loadImage('fbr.jpg');
     soundFormats('mp3','ogg');
    PresetMusic = loadSound('music.mp3');

}

function setup() {
  createCanvas(1601, 902);
  background (0);
//  img = loadImage("fbr.jpg");
//  image(img, 0, 0, width, height);
    image(img, 0, 0,1601, 902);
 
} 
    
    function draw(){
 
//    if (mouseIsPressed) {
//        ///////do something//////////
//        // something =true;
//                        } 
//        else {
//        //something = false;
//             }
//        
////////////////////////////this is the hover thing/////////////////////////////////////////////
        ////parameters/////
    if (mouseX > bx-1601 && mouseX < bx+902 && 
      mouseY > by-1601 && mouseY < by+902) {
///////variable to help//////        
    overBox = true;  
    if(!locked) { 
//      stroke(255); 
//      fill(244,122,158);
img=loadImage('fbrhover.jpg')        
        
        
    } 
  } else {
//    stroke(156,39,176);
//    fill(244,122,158);
        
  img=loadImage('fbr.jpg')    
      
        
///////variable to help//////  
    overBox = false;
  }

        
        
///////change this to image/////////        
//  // Draw the box
//  rect(bx, by, boxSize, boxSize);
//
/////////////////end of hover and creating the image to click on ///////////////////////////////////        
 }
    
    