var bgcolor;
var button;
var bubbles = [];

var slider1;
var slider2;

var h1;
var h1b;

var x;

function setup() {
  createCanvas(windowWidth, windowHeight);

  h1 = createElement('h1', 'Use first slider to control the size.');
  h1b = createElement('h1', 'Use the second one to control oscillation.');

  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(7, 35);
    bubbles[i] = new Bubble(x, y, r);
  }

  bgcolor = color(200);
  button = createButton("Change Background Grey");
  button.mousePressed(changeColor);
  button.position((width / 2) - 80, 800);

  slider1 = createSlider(2, 130, 17); // it needs a minimum (2) , a maximum (130) and a starting value (17).
  slider2 = createSlider(0, 80, 1);
  slider1.position((width / 2) - 72, 700);
  slider2.position((width / 2) - 72, 750);

}

function changeColor() {
  bgcolor = color(random(255)); // change the bg color to a random grayscaled color
}

function draw() {
  background(bgcolor);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(slider2.value());
    bubbles[i].show(slider1.value());
  }
  x = 100 + random(-slider2.value(), slider2.value());
  h1.position(x, height / 2 - 20);
  h1b.position(x, (height / 2) + 20);
}

class Bubble {
  constructor(_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
  }
  move(_more) {
    this.x = this.x + random(-_more, _more);
    this.y = this.y + random(-_more, _more);
  }

  show(_extra) {
    stroke(255);
    strokeWeight(3.4);
    fill(255, 40); // il secondo valore è l'alpha.
    ellipse(this.x, this.y, (this.r * 2) + _extra);
  }
}
