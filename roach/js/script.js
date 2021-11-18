let flyButtonClicked = false
let flyButton = document.getElementById('flyButton');
let colorButton = document.getElementById('colourButton');

let y1 = 0;
let wave = 0;
var angle = 0;
var rotReverse = false;
let bgColor = [0, 160, 70, 100]

flyButton.onclick = function() {
  flyButtonClicked = !flyButtonClicked
}
colorButton.onclick = function() {
  for(let i = 0; i < bgColor.length - 2; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(255);
    bgColor[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function setup() {
  createCanvas(1230, 600);
}

function draw() {
  background(bgColor[0], bgColor[1], bgColor[2], bgColor[3]);

  let x1 = frameCount % width;
  let amp = 100;
  if(flyButtonClicked) {
    y1 = sin(wave * 0.05) * amp
    wave += 1
  }

  drawRoach(x1,height/2 + y1);

}

function drawRoach(x,y) {

  push();


  translate(x,y);

  rotate(PI / 2.0);


  fill(51,25,0,400);

  drawRoachButt(1,50,false);
  drawRoachButt(1,50,true);

  fill(153,76,0,400);
  ellipse(0,0,90,180);

  drawBackRoachLegs(-37,50,true);
  drawBackRoachLegs(37,50,false);
  drawMiddleRoachLegs(-45,10,true);
  drawMiddleRoachLegs(45,10,false);
  drawFrontRoachLegs(-45,-5,true);
  drawFrontRoachLegs(45,-5,false);

  drawRoachWings(x, y)

  fill(204,102,0,400);
  ellipse(0,-70,60,50)
  fill(153,76,0,400);
  ellipse(0,-90,40,30);

  drawRoachEyes(-15,-95, false);
  drawRoachEyes(15,-95, true);

  drawRoachEars(10,-170,false);
  drawRoachEars(-20,0,true);

  pop();
}

function drawRoachWings(x, y){

// top layer of wings

  fill(238,214,214);

  push();

  if(!rotReverse)
    angle += 1
  else
    angle -= 1

  if(angle == 0 || angle == 45)
    rotReverse = !rotReverse

  offX = 75 * sin(radians(angle))
  offY = 75 - (75 * cos(radians(angle)))

  pop();

  push()
  scale(-1, -1)
  translate(offX, offY)
  rotate(radians(angle))
  arc(0, 0, 100, 150, 3 * PI / 2, PI / 2, PIE)
  pop()

  push()
  scale(-1, 1)
  translate(-offX, -offY)
  rotate(radians(angle))
  arc(0, 0, 100, 150, PI / 2, 3 * PI / 2, PIE)
  pop()

// top layer of wings

  fill(102,51,8);

  push();

  if(!rotReverse)
    angle += 1
  else
    angle -= 1

  if(angle == 0 || angle == 45)
    rotReverse = !rotReverse

  offX = 90 * sin(radians(angle))
  offY = 90 - (90 * cos(radians(angle)))

  pop();

  push()
  scale(-1, -1)
  translate(offX, offY)
  rotate(radians(angle))
  arc(0, 0, 100, 150, 3 * PI / 2, PI / 2, PIE)
  pop()

  push()
  scale(-1, 1)
  translate(-offX, -offY)
  rotate(radians(angle))
  arc(0, 0, 100, 150, PI / 2, 3 * PI / 2, PIE)
  pop()


}

function drawRoachEars(x,y,mirror) {

  noFill();
  stroke(0);

  translate(x,y);
    if (mirror == true){
    scale(-1,1);
  }

  curve(5, 26, 0, 73, 24, 0, 73, 61, 0, 15, 65, 0);




}

function drawRoachEyes(x,y,mirror) {

  push();
  translate(x, y);
  if (mirror == true){
    scale(-1,1);
  }

  rotate(-2.5);
  fill(0);
  ellipse (0,0,8,16);

  push();
  rotate(degrees(frameCount/20));
  fill(255);
  ellipse (0,0,5,10);
  pop()

  pop();

}

function drawBackRoachLegs(x,y,mirror){

  push();
  translate(x,y);

  if(mirror == true){
    scale(-1,1);
  }
  strokeWeight(1);
  line(0,0,15,10);
  line(15,10,25,52);
  line(25,52,19,64);
  line(25,52,33,59);
  pop();
}

function drawMiddleRoachLegs(x,y,mirror){

  push();
  translate(x,y);

  if(mirror == true){
    scale(-1,1);
  }
  strokeWeight(1);
  line(0,0,15,10);
  line(15,10,25,52);

  pop();

}

function drawFrontRoachLegs(x,y,mirror){

  push();
  translate(x,y);

  if(mirror == true){
    scale(-1,1);
  }
  strokeWeight(1);
  line(0,0,15,10);

  pop();

}

function drawRoachButt(x,y,mirror){

  push();

  translate(x,y);

  if(mirror == true){
    scale(-1,1);
  }
  triangle(20, 30, 28, 10, 40, 55);

  pop();


}
