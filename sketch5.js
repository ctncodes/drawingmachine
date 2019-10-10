let array = [];
let yellow = (255, 216, 1);

function setup() {
  createCanvas(630,630);

  drawChessBoard();
  strokeWeight(5);
  noFill();
}

function draw() {

  if (mouseIsPressed) {
    background(yellow);

    array.push([mouseX,mouseY]);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0],array[i][1])
    }
    endShape();
  }
}

function keyTyped() {

}
