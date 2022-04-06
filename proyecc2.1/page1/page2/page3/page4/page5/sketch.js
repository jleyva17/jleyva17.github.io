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
  text(`page 5 of 5`, 800, 1185)
  text()
  pop()
  //page specific
  line(50, 180, 950, 180)
  line(50, 220, 950, 220)
  line(50, 260, 950, 260)
  line(50, 300, 950, 300)
  line(50, 420, 950, 420)
  line(50, 460, 950, 460)
  line(50, 500, 950, 500)
  line(50, 540, 950, 540)
  strokeWeight(2)
  line(20, 650, 980, 650)
  line(20, 655, 980, 655)
  line(20, 660, 980, 660)
  textSize(20)
  text(`END LAB`, 420, 680)

  }
