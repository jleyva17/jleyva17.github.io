//color variables
let r;
let g;
let b;
let t;
//index counters for functionality 
//LHS
let leftSide;
let i;
let j;
let k;
let l;
let m;
let n;
//RHS 
let rightSideU1;
let rightSideU2;
let rightSideU3;
let rightSideU4;
let rightSideU5;
let rightSideU6;
let rightSideD1;
let rightSideD2;
let rightSideD3;
let rightSideD4;
let rightSideD5;
let rightSideD6;
let z;
let x;

//string arrays to be used
let utopia;
let dystopia;
let constants = new Array(26);
let variables = new Array(26);
//for testing
let testString;
//graphics overlay for easier future manipulation
let overlay;

function setup() {
  //Initialize main graphic
  overlay = createGraphics(1200, 1000);
  overlay.clear(); 
  //random values for colors
  r = random(255);
  g = random(255);
  b = random(255);
  t = 255;
  //testing [REMOVE EVENTUALLY]
  testString = `oogly boogly`
  //Fill arrays for RHS of equation
  utopia = [`Solution`, `Truth`, `Science`, `Prediction`, `Wonder`, `Progress`, `Safety`, `Expansion`, `Art`, `Efficiency`, `Nourishment`, `Shelter`, `Preservation`, 'Improvement', 'Hope', 'Salvation'];
  dystopia = [`Expansion`, `Profit`, `Power`, `Wealth`, `Control`, `Exploit`, `Extract`, `Consume`, `Destroy`, `Influence`, `Enslave`, `Superiority`, `Opress`, `Shackle`, `Oversee`, `Cull`];
  //fill arrays with ASCII values
  for(i=0; i < 26; i++){
    constants[i] = 65 + i;
    variables[i] = 97 + i;
  }
  //initial state of index counters
  j = 1;
  i = 6
  k = 20;
  l = 11;
  m = 3;
  n = 12;
  z = 0;
  x = 0;
  //initial state of RHS
  rightSideU1 = `= ${utopia[z]}`;
  rightSideU2 = `= ${utopia[(z + 3) % 16]}`;
  rightSideU3 = `= ${utopia[(z + 7) % 16]}`;
  rightSideU4 = `= ${utopia[(z + 11) % 16]}`;
  rightSideU5 = `= ${utopia[(z + 15 ) % 16]}`;
  rightSideU6 = `= ${utopia[(z + 9) % 16]}`;
  rightSideD1 = `= ${dystopia[z]}`;
  rightSideD2 = `= ${dystopia[(z + 3) % 16]}`;
  rightSideD3 = `= ${dystopia[(z + 11) % 16]}`;
  rightSideD4 = `= ${dystopia[(z + 7) % 16]}`;
  rightSideD5 = `= ${dystopia[(z + 15) % 16]}`;
  rightSideD6 = `= ${dystopia[(z + 9) % 16]}`;
  createCanvas(1200, 1000);
  frameRate(10);
}

function draw() {
  background(180);
  //update LHS 
  leftSide = `${String.fromCharCode(constants[i])}${String.fromCharCode(variables[j])} + ${String.fromCharCode(constants[k])}${String.fromCharCode(variables[l])} + ${String.fromCharCode(constants[m])}${String.fromCharCode(variables[n])}`;
  //Update RHS every 5th frame
  if((x % 5) == 0 ){
    rightSideU1 = `= ${utopia[z]}`;
    rightSideU2 = `= ${utopia[(z + 3) % 16]}`;
    rightSideU3 = `= ${utopia[(z + 7) % 16]}`;
    rightSideU4 = `= ${utopia[(z + 11) % 16]}`;
    rightSideU5 = `= ${utopia[(z + 15 ) % 16]}`;
    rightSideU6 = `= ${utopia[(z + 9) % 16]}`;
    rightSideD1 = `= ${dystopia[z]}`;
    rightSideD2 = `= ${dystopia[(z + 3) % 16]}`;
    rightSideD3 = `= ${dystopia[(z + 11) % 16]}`;
    rightSideD4 = `= ${dystopia[(z + 7) % 16]}`;
    rightSideD5 = `= ${dystopia[(z + 15) % 16]}`;
    rightSideD6 = `= ${dystopia[(z + 9) % 16]}`;
  }
  //Update index counters
  j = (j + 7) % 26;
  k = (k + 17) % 26;
  i = (i + 3) % 26;
  l = (l + 19) % 26;
  m = (m + 11) % 26;
  n = (n + 9) % 26;
  z = (z + 1) % 16;
  x += 1;
 //Print text
  overlay.fill(b, r, g, t);
  overlay.textSize(80);
  overlay.textFont('arial');
  overlay.text(leftSide , 20, 120);
  overlay.text(leftSide , 20, 240);
  overlay.text(leftSide , 20, 360);
  overlay.text(leftSide , 20, 480);
  overlay.text(leftSide , 20, 600);
  overlay.text(leftSide , 20, 720);
  overlay.text(rightSideU1 , 550, 120);
  overlay.text(rightSideU2 , 550, 240);
  overlay.text(rightSideU3 , 550, 360);
  overlay.fill(g, b, r, t);
  overlay.text(rightSideD1 , 550, 480);
  overlay.text(rightSideD2 , 550, 600);
  overlay.text(rightSideD3 , 550, 720);
  image(overlay, 0, 0);
  overlay.clear();
}
