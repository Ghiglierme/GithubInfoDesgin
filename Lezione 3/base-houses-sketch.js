let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
}
function draw() {
  background("navy");
  frameRate(15)
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)

  /*
  //metodo de fazer a movimentaçao da lua 1
  moonXpos=moonXpos+1;
  //devemos botar uma condiçao que reinicia o movimento da lua sempre que ela desaparece do frame.
  if(moonXpos>canvasXMax){
  moonXpos=0;
  }
*/

  //metodo de fazer a movimentaçao da lua 2
  moonXpos=frameCount % canvasXMax;
  // % um operador que substitui o resto da operaçao por um valor inteiro
  // pode ser usad para definir um limite, utilizando a logica da linha acima.

  //se quiser mudar o frame rate só da lua
  //moonXpos=frameCount*5 % canvasXMax+80;



  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }
  //rollover --> agiamo se passiamo sopra
  //if passiamo sopra

//siamo dentro le X della casa?
//mouseX > x_casa
//mouseX < x_casa+house_widht
//siamo dentro le Y della casa?
//mouseY > y_casa
//mouseY < y_casa+house_widht

//&& and , || or
//c1 && c2 --> emtrambe le condizioni siano vere
//c1 || c2 --> almeno una delle condizioni siano vere
  
  if ( (mouseX > x_casa) &&
    (mouseX < x_casa+house_widht) &&
    (mouseY > y_casa) &&
    (mouseY < y_casa+house_widht))  {

    fill("navy");
    rect(x_casa, y-house_height , house_width, house_height);
  }








//estrelas:
let xStar=0;
let yStar=0;
//querer gera algumas estrelas, para fazer isso, precisamos de uma açao de repetiçao, portanto, usaremos um loop -> for

  for(let numero_stelle=0; numero_stelle < 5; numero_stelle++){
    stroke("yellow");
    strokeWeight(1)
    point(0,0);
    // em p5 exite a funçao random para gerar coisas aleatoriamente
    xStar=random();
  }

  for(let nS=0; nS < 5; nS++){
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(0,10));
    point(xStar,yStar);
    xStar=random(0, canvasXMax);
    yStar=random(0, canvasYMax/2);
  }

  //se  quiser fazer a operaçao parar em um certo Ponto
  /*
  if (frameCount == 50){
    noLoop();
  } */

  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(`${frameCount}`, 5, 50);
  //text(`X=${mouseX}, Y=${mouseY}`, 5, 50);
}
