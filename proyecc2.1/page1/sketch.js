let title = `Laws of Propagation`;
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
  text(`page 1 of 5`, 800, 1185)
  text()
  pop()
  //page variations
  textStyle(`bold`)
  textSize(35)
  text(title, 300, 160)
  textSize(22)
  text(`Objectives`, 70, 290)
  text(`Introduction`, 70, 600)
  strokeWeight(2)
  line(300, 170, 665, 170)
  line(300, 173, 665, 173)
  line(300, 176, 665, 176)
  line(70, 295, 190, 295)
  line(70, 605, 212, 605)
  fill(`white`)
  square(55, 320 , 10)
  square(55, 320 + 72, 10)
  square(55, 320 + 120, 10)
  square(55, 320 + 168, 10)

}
//sentience is suffering
//suffering is  powa
//ratio of sentient to sheep
//keep ratio under ctrl
//school for gods
//organism reaches "breakthrough point"
//keep them competing against each other 