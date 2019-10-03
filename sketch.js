function setup(){
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
