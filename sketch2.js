let sketch = function(p) {
  p.setup = function() {
    p.array = [];
    p.checkeredPattern = 0;
    p.checkeredRed = 0;
    p.checkeredGreen = 0;
    p.checkeredBlue = 0;
    p.theGrid = [];

    p.createCanvas(400, 400);
    // p.drawChessBoard();
    // p.noFill();
  };
  p.draw = function() {
    // p.background(250, 235, 215);
    p.background('#453B32');
    // p.background('assets/Michael Jackson One.jpg');
    // if (p.mouseIsPressed) {
    //   // p.checkeredPattern += 5;
    //   // p.background(p.checkeredPattern);
    //   p.array.push([p.mouseX,p.mouseY]);
    //   p.beginShape();
    //   for (let i = 0; i < p.array.length; i++) {
    //     p.curveVertex(p.array[i][0],p.array[i][1])
    //     console.log(p.array[i][0]);
    //     console.log(p.array[i][1]);
    //   }
    //   p.endShape();
    // }
  };
  p.keyTyped = function() {
    if (p.key === 's') {
      p.saveCanvas('fileName', 'png');
    } else if (key === 'd') {
      p.background(255);
      p.beginShape();
      for (let i = 0; i < p.array.length; i++) {
        p.curveVertex(p.array[i][0],p.array[i][1])
      }
      p.endShape();
    }
    return false;
  }
  p.drawChessBoard = function() {
    p.numCells = 8;
    // fillColor = 255;
    p.fillRed = 1;
    p.fillGreen = 30;
    p.fillBlue = 156;
    p.strokeWeight(0);
    let x;
    let y;
    for (let i = 0; i <= p.numCells; i += 1) {
      p.theGrid[i] = [];
      // theGrid[j] = [];
      for (let j = 0; j <= p.numCells; j += 1) {
        p.x = i * p.width / p.numCells;
        p.y = j * p.height / p.numCells;
        if (p.fillRed === 1 && p.fillGreen === 30 && p.fillBlue === 156) {
          // fillColor = 200;
          p.fillRed = 255;
          p.fillGreen = 216;
          p.fillBlue = 1;
          p.theGrid[i][j] = "Yellow";
        } else {
          p.fillRed = 1;
          p.fillGreen = 30;
          p.fillBlue = 156;
          p.theGrid[i][j] = "Blue";
        }
        p.fill(p.fillRed, p.fillGreen, p.fillBlue);
        p.rect(p.x, p.y, p.width / p.numCells, p.height / p.numCells);
      }
    }
    p.strokeWeight(5);
    p.console.log(theGrid);
  }
};
let myp5 = new p5(sketch);
let sketch2 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 238, 195);
  };
};
let myp6 = new p5(sketch2);
let sketch3 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(250, 240, 205);
  };
};
let myp7 = new p5(sketch3);
let sketch4 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(236, 220, 207);
  };
};
let myp8 = new p5(sketch4);
let sketch5 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(239, 222, 205);
  };
};
let myp9 = new p5(sketch5);
let sketch6 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 250, 205);
  };
};
let myp10 = new p5(sketch6);
let sketch7 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(245, 222, 179);
  };
};
let myp11 = new p5(sketch7);
let sketch8 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 229, 180);
  };
};
let myp12 = new p5(sketch8);
let sketch9 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(250, 231, 181);
  };
};
let myp13 = new p5(sketch9);
let sketch10 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 228, 196);
  };
};
let myp14 = new p5(sketch10);
let sketch11 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 235, 205);
  };
};
let myp15 = new p5(sketch11);
let sketch12 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(250, 240, 190);
  };
};
let myp16 = new p5(sketch12);
let sketch13 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 248, 220);
  };
};
let myp17 = new p5(sketch13);
let sketch14 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 253, 208);
  };
};
let myp18 = new p5(sketch14);
let sketch15 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background('#453B32');
    // p.background(255, 248, 231);
  };
};
let myp19 = new p5(sketch15);
// let sketch16 = function(p) {
//
//   p.setup = function() {
//     p.createCanvas(400, 400);
//   };
//   p.draw = function() {
//     p.background('#453B32');
//     // p.background(255, 248, 231);
//   };
// };
// let myp20 = new p5(sketch16);
// let sketch17 = function(p) {
//
//   p.setup = function() {
//     p.createCanvas(400, 400);
//   };
//   p.draw = function() {
//     p.background('#453B32');
//     // p.background(255, 248, 231);
//   };
// };
// let myp21 = new p5(sketch17);
// let sketch18 = function(p) {
//
//   p.setup = function() {
//     p.createCanvas(400, 400);
//   };
//   p.draw = function() {
//     p.background('#453B32');
//     // p.background(255, 248, 231);
//   };
// };
// let myp22 = new p5(sketch18);
