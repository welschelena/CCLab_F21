
let img;
let yoff = 0.0;
let waterlevel;

function preload() {
  img = loadImage("images/shanghai.jpeg");
}

function windowResized () {
resizeCanvas(windowWidth, windowHeight);

}

function setup() {
//createCanvas(600, 400)
createCanvas(windowWidth, windowHeight)
//canvas.parent('bg');
waterlevel = height;
}

function mouseWheel(event) {
  waterlevel -= event.delta;
}

function draw() {
  image(img, 0, 0, windowWidth, windowHeight);
  noStroke();
  fill(50, 100, 200, 190);

  beginShape();

  let xoff = 0;

  for (let x = 0; x <= width; x += 10) {

    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    vertex(x, waterlevel + y);
    xoff += 0.05;
  }

  yoff += 0.01;
  waterlevel -= 0.3;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}
