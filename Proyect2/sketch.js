//used for window dimensions
let width;
let height;
//increment
let i;
//coordinate values for input characters
let xc;
let yc;
let cor = [];
//link next
let link;
let access;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  width = windowWidth/2.5;
  height = windowHeight/2.5;
  i = 0;
  xc = width + 105;
  yc = height + 100;
  cor = {
    x:xc,
    y:yc,
    x1:xc,
    y1:yc + 70
  }
  background(150);
  fill(101, 7, 7);
  stroke(`white`);
  strokeWeight(3);
  rect(width, height, 500, 300, 50);
  strokeWeight(1);
  fill(`gray`);
  rect(width+10, height+10, 480, 280, 50);
  fill(`white`);
  rect( width + 100, height + 98, 350, 40);
  rect( width + 100, height + 168, 350, 40);
  stroke(`black`);
  textFont('Tahoma');
  textSize(50);
  text(`Login`, width + 180, height + 50);
  textSize(40);
  text(`ID:`, width + 37, height + 130);
  text(`Key:`, width + 15, height + 200); 
  fill(`black`);
}

function draw() {
  if (i < 10 ) {
    triangle(cor.x, cor.y, cor.x + 30, cor.y, cor.x +15, cor.y + 30);
    cor.x = cor.x + 33;
    i = i + 1;
  }
  else if (i < 20){
    triangle(cor.x1, cor.y1, cor.x1 + 30, cor.y1, cor.x1 +15, cor.y1 + 30);
    cor.x1 = cor.x1 + 33;
    i = i + 1;
  }
  }


