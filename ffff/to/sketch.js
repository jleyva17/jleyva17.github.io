let r, g, b
let maincolor
let bcolor
let name = window.prompt("Who are you: ");

function setup() {
  createCanvas(1000, 800);
  r = random(255)
  g = random(255)
  b = random(255)
  maincolor = color(r,g,b);
  bcolor = color(250)
}

localStorage.setItem("name", name)

function draw() {
  background(bcolor);
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
  fill(maincolor)
  circle(535, 435, 50)
  fill(`black`)
  textSize(20)
  text(name, 495, 480)
}
