let title = `Laws of Propagation`;
//funciton to make a nxn table of with input n # of cells, height, width, and position
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
  text(`page 3 of 5`, 800, 1185)
  text()
  pop()
  makeTable(10, 800, 400, 100, 100)
  line(50, 650, 950, 650)
  line(50, 690, 950, 690)
  line(50, 730, 950, 730)
  line(50, 770, 950, 770)
  line(50, 990, 950, 990)
  line(50, 1030, 950, 1030)
  line(50, 1070, 950, 1070)
  line(50, 1110, 950, 1110)


  }
