//Spring drawing constants for top bar
var springHeight = 32,
    left,
    right,
    maxHeight = 200,
    minHeight = 100,
    over = false,
    move = false;

//Spring simulation constants
var M = 0.8, //mass
    K = 0.2, //spring constant
    D = 0.92, //Damping
    R = 150; //Rest Position

//Spring simulation variables
var ps = R, //Position
    vs = 0.0, //Velocity
    as = 0, //Acceleration
    f = 0; //Force

function setup(){
  createCanvas(710, 400);
  rectMode(CORNERS);
  noStroke();
  left = width/2 - 100;
  right = width/2 + 100;
}

function draw() {
  background(102);
  updateSpring();
  drawSpring();
}

function drawSpring(){
  //draw base
  fill(0.2);
  var baseWidth = 0.5 * ps + -8;
  rect(width/2 - baseWidth, ps + springHeight, width/2 + baseWidth, height);

  //set color and draw top bar
  if(over || move ){
    fill(255);
  }else {
    fill(204);
  }
   rect(left, ps, right, ps + springHeight);
}

function updateSpring(){
  //update the spring position
  if(!move){
    f = -K * (ps - R); //f=-ky
    as = f / M;  //set the acceleration, f=ma == a=f/m
    vs = D * (vs + as); //set the velocity
    ps = ps + vs; //Update position 
  }
  
  if(abs(vs) < 0.1){
    vs = 0.0;
  }

  //Test if the mouse is over the top bar
  if (mouseX > left && mouseX < right && mouseY > ps && mouseY < ps + springHeight) {
    over = true;
  } else {
    over = false;
  }

  //set and constrain the position of top bar
  if (move){
    ps = mouseY - springHeight/2;
    ps = constrain(ps, minHeight, maxHeight);
  }
}

function mousePressed(){
  if (over) {
    move = true;
  }
}

function mouseReleased(){
  move = false;
}