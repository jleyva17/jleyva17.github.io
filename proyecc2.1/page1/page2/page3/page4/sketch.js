let title = `Laws of Propagation`;
//we making tables again
function makeTable(cells, width, height, xpos, ypos){
  push()
  fill(`white`)
  noStroke()
  let jumh = width / cells
  let jumv = height / cells
  rect(xpos, ypos, width, height)
  strokeWeight(1)
  stroke(`black`)
  let i = 0;
  while(i <= cells){
    line(xpos + (jumh * i), ypos, xpos + (jumh * i), ypos + height)
    line(xpos, ypos + (jumv * i), xpos + width, ypos + (jumv * i))
    i++
  }
  pop()
}

function setup() {
  createCanvas(1000, 1200);
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
  text(`page 4 of 5`, 800, 1185)
  text()
  pop()
  //page specific
  textStyle(`bold`)
  textSize(22)
  text(`II. Socratic Ratio for Peak Efficiency`, 70, 100)
  strokeWeight(2)
  line(70, 105, 470, 105)
  makeTable(10, 800, 400, 60, 600)



  }
