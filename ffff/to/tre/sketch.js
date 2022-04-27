let r, g, b, x
let maincolor
let bcolor
let state
let what = []
alert(`who decides?`)
let name = localStorage.getItem("name");


function mkGrid(s, clr){
  let p = random(255)
  let o = random(255)
  let q = random(255)
  clr = color(p, o, q)
    if (s == 0){
      fill(200)
      strokeWeight(1)
      stroke(`black`)
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
      strokeWeight(1)
      stroke(`black`)
      fill(200)
      square(510, 410, 50)
    }
}

function setup() {
  what[0] = `person`
  what[1] = name
  createCanvas(1000, 800);
  r = random(255)
  g = random(255)
  b = random(255)
  maincolor = color(r,g,b);
  bcolor = color(250)
  frameRate(2)
  state = 0 
  x = 0
}

function draw() {
  x = (x + 1) % 2

  background(bcolor);
  mkGrid(state, maincolor)
  if(state == 0){
    state = 1
  }
  else{
    state = 0
  }
  textSize(20)
  fill(`black`)
  noStroke()
  text(what[x], 510, 480)
}
