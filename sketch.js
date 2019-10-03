// var mic;
'use strict'
// Gen Z, iGen, or Centennials: Born 1996 - TBD.
// Millennials or Gen Y: Born 1977 - 1995.
// Generation X: Born 1965 - 1976.
// Baby Boomers: Born 1946 - 1964.
// Traditionalists or Silent Generation: Born 1945 and before.
let yearBorn = 1901;
let generation;
function setup(){
  // mic = new p5.AudioIn()
  // mic.start();
  createCanvas(400,400);
  if (yearBorn >= 1996) {
    generation = "gen Z";
  } else if (yearBorn > 1977) {
    generation = "millenial";
  } else if (yearBorn > 1965) {
    generation = "gen X";
  } else if (yearBorn > 1946) {
    generation = "boomers";
  } else {
    generation = "silent";
  }
  console.log(generation);
}
function draw(){
  background(220);
  // micLevel = mic.getLevel();
  // ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}