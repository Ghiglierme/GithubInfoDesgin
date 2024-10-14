let canvasXMax=200;
let canvasYMAX=200;

function setup() {
  createCanvas(canvasXMax, canvasYMAX);
  background(220);
}

function draw() {
  background(220);
  textSize(15);

  let string_toprint="Conteudo Mouse X=  " +mouseX+ " \ny=" + mouseY;
  text(string_toprint, 20, 20);

  strokeWeight(2);
  line(0, mouseX,canvasXMax, mouseY);
//feedback tasto mouse x
//disegnare la linea gialla
//se schiacciamo il mouse
//p5--> true, se il mouse schiacciato,
//altrimenti è flase
  if (mouseIsPressed == true) {
  // LEFT, RIGHT, CENTER
    if(mouseButton == RIGHT) {
      background(220);
    }
  stroke("yellow");
  }
    else{
  stroke("black");
  }

 mouseIsPressed;
}
