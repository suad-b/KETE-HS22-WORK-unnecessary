//Framerate controls how much often the canvas refreshes
var fr = 60;
function setup() {
  createCanvas(250, 250);
  frameRate(fr);
}

function draw() {
  frameRate(fr);
  background(1);
}
