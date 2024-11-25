let data;
let dataObj;

function preload() {
  data = loadTable("assets/data.csv", "csv", "header");
}

// colori
let pageColor = "#EDEDED";
let circleColor = "darkblue";
let textColor = "black";
let dotColor = "white";

// altre variabili
let circleSize = 130;
let padding = 20;

function setup() {
  let totalWidth =
    circleSize * data.getRowCount() + padding * (1 + data.getRowCount());
  createCanvas(totalWidth, windowHeight);
  background(pageColor);

  dataObj = data.getObject();

  let xPos = padding + circleSize / 2;
  let yPos = windowHeight / 2;

  //ciclo for per disegnare un  glifo per ogni riga
  for (let i = 0; i < data.getRowCount(); i++) {
    //carico i dati della riga
    let item = dataObj[i];

    console.log(item);

    drawGlyph(xPos, yPos, circleSize, item);
    xPos = xPos + padding + circleSize;
  }
}

function draw() {}

function drawGlyph(x, y, size, rowData) {
  //disegno il cerchio per la popolazione
  let popSize = map(rowData.population, 0, 1439, 0, size);
  //fill("red");

  fillGradient("conic", {
    from: [x + 48, y + 48, 0],
    steps: ["red", "yellow", "red"],
  });

  ellipse(x + 48, y + 48, popSize, popSize);

  //disegno sfondo
  fill(circleColor);
  ellipse(x, y, size, size);
  //scrivo il nome
  fill(textColor);

  textAlign(CENTER, CENTER);
  textSize(16);
  text(rowData.country, x, y + size / 2 + 20);

  for (let j = 0; j < rowData.density; j++) {
    //disegna pallini
    noStroke();
    fill(dotColor);

    // creo angolo casuale
    let angle = random(TWO_PI);
    let radius = random(size / 2);

    push();
    //mi pongo al centro del glifo
    translate(x, y);
    //ruoto in base alla variabile angle
    rotate(angle);
    // disegno il pallino
    ellipse(radius, 0, 3, 3);
    //ripristino assi
    pop();
  }
}
