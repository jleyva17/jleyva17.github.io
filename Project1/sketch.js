//arrays to be used for LHS equation setup
let constants = new Array(26);
let variables = new Array(26);
//arrays to be used in RHS of equation
let rightGood = [`Solution`, `Truth`, `Science`, `Prediction`, `Wonder`, `Progress`, `Safety`, `Expansion`, `Art`, `Efficiency`, `Nourishment`, `Shelter`, `Preservation`, 'Improvement', 'Hope', 'Salvation'];
let rightBad = [`Expand`, `Profit`, `Power`, `Wealth`, `Control`, `Exploit`, `Extract`, `Consume`, `Destroy`, `Influence`, `Enslave`, `Own`, `Opress`, `Shackle`, `Oversee`, `Cull`];
let goodColor;
let badColor; 

//Counter for functionality
let n;
let h;
let e;

//function to set up equations on left side, prints a line at a time in order to make every line different
function leftSide(string1, string2, xpos, ypos){
  let i = random(0, 26);
  i = parseInt(i);
  stroke(`white`);
  strokeWeight(1);
  fill(0);
  textFont(`arial`);
  text(`${String.fromCharCode(string1[i])}${String.fromCharCode(string2[(i + 3) % 26])} + ${String.fromCharCode(string1[(i + 17) % 26])}${String.fromCharCode(string2[(i + 11) % 26])} + ${String.fromCharCode(string1[(i + 17) % 26])}${String.fromCharCode(string2[(i + 12) % 26])} + ${String.fromCharCode(string1[(i + 21) % 26])}${String.fromCharCode(string2[(i + 7) % 26])}`,xpos, ypos);
  }
//function to print the right hand side, prints every row , parameter p to change the ratio of good/bad outcomes
  function rightSide(good, bad, p, colorG, colorB){
    let i = random(0, 16);
    let x = 750;
    let y = 120;
    i = parseInt(i);
    stroke(`black`);
    strokeWeight(3);
    while (y <= 720 ){
      if ( p < 6 ){
        fill(colorG);
        text(`= ${good[i]}`, x, y);
        y = y + 120;
        i = parseInt(i);
        p++;
        i = (i + p ) % 16;
      }
      else {
        fill(colorB);
        text(`= ${bad[i]}`, x, y);
        y = y + 120;
        i = (i + p) % 16;
        i = parseInt(i);
        p++;
      }
    }
  }

function setup() {
  let r = random(255);              //set color pallete for right side, random but ensure they are different enough to distinguish
  let g = random(255);
  let b = random(255);
  goodColor = color(r, g, b, 255);    
  badColor = color(b, r, g, 255);
  createCanvas(1500, 1000);
  frameRate(5);                     //lower framerate for legibility
  n = 0;
  h = 0;
  e = 50;
  constrain(n, 0, 100);
  for(let i = 0; i < 26; i++){      //initialize arrays for LHS of equation
    constants[i] = 65 + i;
    variables[i] = 97 + i;
  }
}

function draw() {
  clear();                           //needed to cover previous frame fully
  let x = 20; 
  let y = 120;
  background(0, 0, 0, 100);
  textSize(82);
  while (y < 730){                   //print left side   
    leftSide(constants, variables, x, y);
    y = y + 120;
  }
  rightSide(rightGood, rightBad, h, goodColor, badColor);     //print right side
if ((keyIsPressed == true) && (h != 6) ){                     //check for user input, n counts up if user pressed a key, down if not. 
  n = n - 1;                                                  
  if (n < e){                                                 // compare n to threshold "e". Adjust parameter "h" whenever a threshold is crossed and adjust threshold
    if (e < 150){
      h = h - 1;
      e = e - 50;
    }
    else if( e > 150 && e < 170){
      h = h - 1;
      e = e - 20
    }
  }
}
else { 
  n++
}
if (n > e){
  if (e <= 100){
    e += 50;
   }
   else if( e > 100 && e < 170){
    e += 20;
   }
   else{
     e+= 5;
   }
  h += 1;
}
}
