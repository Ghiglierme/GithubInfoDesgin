function setup() {
  createCanvas(1000, 1000);
  color(200);
  frameRate(1);
  noLoop();
}

function draw() {
  background("black");
  fill("withe");

  for(let i = 0; i < width/100; i++) {
    for(let j = 0; j < height/100; j++) {
      circle(i * 100 + 50, j * 100 + 50, random(25, 100));
    }
  }
}

//function () {//
 // setPosition();//


