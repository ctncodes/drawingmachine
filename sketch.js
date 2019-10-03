function setup(){
  createCanvas(600,600);
  background(220);
}

function draw(){

if (!mouseIsPressed){
  ellipse(mouseX,mouseY,10,10);
}

}
