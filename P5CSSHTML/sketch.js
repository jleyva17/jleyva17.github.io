let previous;
let current;
let n;
function setup() {
  createCanvas(400, 550);
  previous = 0;
  current = 60;
  let n = 0;
  frameRate(90);
}

function draw() {
  n = (n + 1) % 3;
  if(((previous < current) && (current != 80)) || (current == 60)){
    previous = current;
    current++;
  }
  else if ((previous > current) || (current == 80)){
    previous = current;
    current--;
  }
  background(220);
  fill('#F6DDCC');
  ellipse(frameCount , current, 20);
}
