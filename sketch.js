function setup(){
  createCanvas(600,600);
  background(220);
  strokeWeight(23);
}

function draw(){

if (!mouseIsPressed){
  line(mouseX,mouseY,pmouseX,pmouseY);
}

}
