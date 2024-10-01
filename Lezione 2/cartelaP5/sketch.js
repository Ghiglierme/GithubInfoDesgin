function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkblue");
  fill("yellow");
  stroke("white");
  strokeWeight("10");
  circle(300, 75, 100);
  fill("green")
  stroke("darkgreen")
  strokeWeight("5");
  rect(0, 200, 400, 200);
  fill("white")
  stroke(0)
  strokeWeight(0);
  text("qualquer coisa", 150, 300);
}
