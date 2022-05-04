//declare variables to be used
let r, g, b, x
let maincolor
let bcolor
let state
let what = []
//prompt user with question (no input) & retrieve last page input from local storage
alert(`who decides?`)
let name = localStorage.getItem("name");

//super cool custom function to alternate between picture states
function mkGrid(s, clr){
  let border = color(0)
  let p = random(255)
  let o = random(255)
  let q = random(255)
  clr = color(p, o, q)
    if (s == 0){
      fill(200)
      strokeWeight(3)
      stroke(border)
      for (let i = 10; i < 1000; i= i + 100){
        for (let k = 10; k < 800; k = k + 100){
          square(i, k , 50)
        }
      }
      fill(bcolor)
      noStroke()
      square(485, 390, 100)
      fill(clr)
      circle(535, 436, 50)
    }
    if (s == 1){
      fill(clr)
      noStroke
      for (let i = 35; i < 1000; i= i + 100){
        for (let k = 36; k < 800; k = k + 100){
          p = random(255)
          o = random(255)
          q = random(255)
          clr = color(p, o, q)
          fill(clr)
          circle(i, k , 50)
        }
      }
      strokeWeight(3)
      stroke(border)
      fill(200)
      square(510, 410, 50)
    }
    if (s == 2){
      fill(200)
      strokeWeight(3)
      stroke(border)
      for (let i = 10; i < 1000; i= i + 100){
        for (let k = 10; k < 800; k = k + 100){
          square(i, k , 50)
        }
      }
      fill(bcolor)
    }
}

function setup() {
  frameRate(1)
  //set array string values
  what[0] = name
  what[1] = `person`
  what[2] = `commodity`
  createCanvas(1000, 800);
  r = random(255)
  g = random(255)
  b = random(255)
  maincolor = color(r,g,b);
  bcolor = color(100)
  frameRate(2)
  state = 0 
  x = 0
}

function draw() {
  background(bcolor);
  //call make picture function , cycle through 3 states by modifying state variable, choosing corresponding string with x value
  mkGrid(state, maincolor)
  state = (state + 1) % 3
  textSize(20)
  fill(`black`)
  noStroke()
  text(what[x], 510, 480)
  x = (x + 1) % 3
}
