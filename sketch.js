var bgcolor;
var button;
var bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
    bubbles[i] = new Bubble(x, y, r);
  }

  bgcolor = color(47);
  button = createButton("Change Background Grey");
  button.mousePressed(changeColor);
  button.position((width / 2) - 80, 800);

}

function changeColor() {
  bgcolor = color(random(255)); // change the bg color to a random grayscaled color
}

function draw() {
  background(bgcolor);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(255, 40); // il secondo valore è l'alpha. 
    ellipse(this.x, this.y, this.r * 2);
  }
}
