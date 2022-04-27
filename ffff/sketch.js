function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(250);
  fill(200)
  strokeWeight(1)
  stroke(`black`)
  for (let i = 10; i < 1000; i= i + 100){
    for (let k = 10; k < 800; k = k + 100){
      square(i, k , 50)
    }
  }
  fill(250)
  noStroke()
  square(500, 400, 100)
  fill(`red`)
  circle(535, 435, 50)
}
