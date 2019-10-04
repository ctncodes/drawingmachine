let sketch = function(p) {
  p.setup = function() {
    p.createCanvas(700, 410);
  };
  p.draw = function() {
    p.background(0);
    p.fill(255);
  };
};
let myp5 = new p5(sketch);
let sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(700, 410);
  };
  p.draw = function() {
    p.background(51);
    p.fill(255);
  };
};
let myp6 = new p5(sketch2);
