
//variables to be used in page
let r, g, b
let maincolor
let bcolor
//prompt user for input to be used
let name = window.prompt("Who are you: ");

function setup() {
  createCanvas(1000, 800);
  //initialize random colors
  r = random(255)
  g = random(255)
  b = random(255)
  maincolor = color(r,g,b);
  bcolor = color(100)
}
//store user input for use in next page
localStorage.setItem("name", name)

function draw() {
  //make boring square picture
  background(bcolor);
  fill(200)
  strokeWeight(3)
  stroke(`black`)
  for (let i = 10; i < 1000; i= i + 100){
    for (let k = 10; k < 800; k = k + 100){
      square(i, k , 50)
    }
  }
//make pretty circle for our subject & name with user input
  fill(bcolor)
  noStroke()
  square(485, 390, 100)
  fill(maincolor)
  circle(535, 435, 50)
  fill(`black`)
  textSize(20)
  text(name, 510, 480)
}
