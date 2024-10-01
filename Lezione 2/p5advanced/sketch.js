let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
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
  stroke("yellow")
  strokeWeight(30);
  let xStars_primordiale = 10;
  let yStars_primordiale = 20;
  point(xStars_primordiale, yStars_primordiale)
  let passo = 1;
  for(let i=0; i<50; i=i+passo){
    strokeWeight(i*3)
    if(i%2==0){
        stroke("yellow");
    }else{
        stroke("red");
    }
    strokeWeight(i*3)
    point(xStars_primordiale*i, yStars_primordiale+i)
  }

  fill("white")
  stroke("black")
  strokeWeight("5");
  rect(10, 140, 60, 60);

  fill("white")
  stroke("black")
  strokeWeight("5");
  rect(110, 140, 60, 60);

  fill("white")
  stroke("black")
  strokeWeight("5");
  rect(210, 140, 60, 60);

  fill("white")
  stroke("black")
  strokeWeight("5");
  rect(310, 140, 60, 60);


  fill("red")
  stroke("darkred")
  strokeWeight("5");
  triangle(0,140,40,90,80,140)

  fill("red")
  stroke("darkred")
  strokeWeight("5");
  triangle(100,140,140,90,180,140)
  
  fill("red")
  stroke("darkred")
  strokeWeight("5");
  triangle(0,140,40,90,80,140)

  fill("red")
  stroke("darkred")
  strokeWeight("5");
  triangle(0,140,40,90,80,140)

  

  stroke("red")
  strokeWeight(30);
  let x1teto = 100;
  let y1teto = 200;
  let x2teto = 200;
  let y2teto = 400;
  let x3teto = 300;
  let y3teto = 500;
  triangle(x1teto, y1teto, x2teto, y2teto, x3teto, y4teto,)
  let muro = 1;
  for(let i=0; i<50; i=i+muro){
    strokeWeight(i*3)
    if(i%2==0){
        stroke("purple");
    }else{
        stroke("red");
    }
    strokeWeight(i*3)
   triangle(xteto*i, yteto+i)
  }


  //point(xStars_primordiale,yStars_primordiale);
  //point(xStars_primordiale+60,30);
  //point(xStars_primordiale,100);
  //point(75,100);
  fill("white");
  stroke(0);
  strokeWeight(0);
  text("qualquer coisa", 150, 300);
}