//variables to be used 
let r, g, b, x
let maincolor
let bcolor
let state
let what = []


//super cool picture function this time only with one state, more pretty circle this time though to make up for it
function mkGrid(s, clr){
  let border = color(0)
  let p = random(255)
  let o = random(255)
  let q = random(255)
  clr = color(p, o, q)
    if (s == 1){
      fill(clr)
      noStroke
      for (let i = 35; i < 1000; i= i + 100){
        for (let k = 36; k < 800; k = k + 100){
          for (let j = 0; j < 40; j = j + 5){
            p = random(255)
            o = random(255)
            q = random(255)
            clr = color(p, o, q)
            fill(clr)
            circle(i, k , 50 - j)
          }
        }
      }
    }
  }
function setup() {
  frameRate(1)
  createCanvas(1000, 800);
  r = random(255)
  g = random(255)
  b = random(255)
  maincolor = color(r,g,b);
  bcolor = color(100)
  frameRate(2)
  state = 1 
  x = 0
}
//nothing interesting here
function draw() {
  background(bcolor);
  mkGrid(state, maincolor)
  textSize(20)
  fill(`black`)
  noStroke()
}
