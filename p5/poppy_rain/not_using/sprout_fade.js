function sprouting(){
//  image(img8, 100,20);
//  image(img9, 100,20);
//  image(img10, 100,20);
//

  image(img8, 100,20);
  tint(255, a);
  //fill(0);
  //text(frameCount, width / 2 , height / 4);

  if(frameCount < 299){
    if(frameCount < 255){
      if(a<255){
      a++;
      }
    }
  }else {
    if(frameCount > 300){
      if(a>0){
      a-=2;
      }
    }
  }
  //image();
}
