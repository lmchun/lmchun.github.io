var option = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(220);
  var density = map(mouseX, 0, width, 20, 50);

  if(option == 1){
    //option 1 stitches
  for (var x = 50; x <= width-50; x += density){
   for(var y = 50; y <= height-50; y += density){
      line(x-5, y-5, x+5,y+5);
      line(x+5, y-5, x+5,y+5);
   }
      }

  }
  else if (option == 2){
    for (var x = 50; x <= width-50; x += density){
     for(var y = 50; y <= height-50; y += density){
    line(x, y, width/2,height/2);
       }
    }
  }
  else if(option ==3){
    //option 3 group of 5
    for (var x = 50; x <= width-50; x += density){
     for(var y = 50; y <= height-50; y += density){
      for(var i = 0; i<16; i+=4){
       line(x+i, y, x+i,y+12);
       }
       line(x,y,x+12,y+12);
     }
    }
   }
}

function mousePressed(){
 option++;
  if(option > 5) option = 1;
}
  
