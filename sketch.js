var bgcolor;
var button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcolor = color(47);
  button = createButton("Change Background Grey");
  button.mousePressed(changeColor);
  button.position((width/2) - 80, 800);

}

function changeColor(){
  bgcolor = color(random(255)); // change the bg color to a random grayscaled color
}

function draw() {
  background(bgcolor);
}
