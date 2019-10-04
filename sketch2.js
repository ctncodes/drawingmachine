let sketch = function(p) {
  p.setup = function() {
    p.createCanvas(450, 450);
  };
  p.draw = function() {
    p.background(0);
  };
};
let myp5 = new p5(sketch);
let sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(450, 450);
  };
  p.draw = function() {
    p.background(51);
  };
};
let myp6 = new p5(sketch2);
let sketch3 = function(p) {
  p.setup = function() {
    p.createCanvas(450, 450);
  };
  p.draw = function() {
    p.background(104);
  };
};
let myp7 = new p5(sketch3);
