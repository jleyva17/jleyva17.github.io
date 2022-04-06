let title = `Laws of Propagation`;
let x;
function setup() {
  createCanvas(1000, 1200);
  x = [40, 20]

}

function draw() {
  //general page setup
  background(230)
  strokeWeight(1)
  fill('black')
  textFont(`Tahoma`)
  push()
  stroke(150)
  line(30, 30, 970, 30)
  line(30, 1170, 970, 1170)
  textSize(15)
  fill(80)
  textStyle(`italic`)
  text(`Ideological Department`, 60, 20)
  text(`Laboratory Manual`, 800, 20)
  text(`Lab Manual`, 400, 20)
  text(title, 400, 1185)
  text(`page 2 of 5`, 800, 1185)
  pop()
  fill(`white`)
  noStroke()
  square(150, 330, 600)
  strokeWeight(1)
  stroke(`black`)
  line(150, 910, 750, 910)
  line(170, 330, 170, 930)
  let i = 1
  while(i <  30){
    line(150 + (i * x[1]), 905, 150 + (i * x[1]), 915)
    line(165, 910 - (i * x[1]), 175, 910 - (i * x[1]))
    line(165, 910 - (i * x[2]), 175, 910 - (i * x[2]))
    i++;
  }
  fill(`black`)
  textStyle(`bold`)
  textSize(22)
  text(`I. Ailes Control Process`, 70, 100)
  strokeWeight(2)
  line(70, 105, 350, 105)
}