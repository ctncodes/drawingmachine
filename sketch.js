function setup(){
  //Drawing #1
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #2
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #3
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #4
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #5
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #6
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #7
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #8
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #9
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #10
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #11
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #12
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #13
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #14
  createCanvas(600,600);
  background(250,235,215);
  //Drawing #15
  createCanvas(600,600);
  background(250,235,215);
  strokeWeight(5);
}

function draw(){

if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');
  }

  return false;
}
