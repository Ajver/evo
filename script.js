
var cells = [];
var col, row;

var zoom = 1.0;

function setup() {
  createCanvas(500, 500);
  
  col = width / cw * 2;
  row = width / cw * 2;
  
  for(let i=0; i<100; i++) {
    let color = [];
    color[0] = random(256);
    color[1] = random(256);
    color[2] = random(256);
    
    let x = floor(random(col))*cw - width;
    let y = floor(random(row))*cw - height;
    let cell = new Cell(x, y, color);
    cells.push(cell);
  }

}

function draw() {
  translate(width/2, height/2);
  scale(zoom);
  background(0);
  
  for(let i=0; i<cells.length; i++) {
    cells[i].draw();
  }
}

function keyPressed() {
  if(keyCode == 187) {
    zoom *= 1.05;
  }else if(keyCode == 189) {
    zoom *= 0.95;
  }
}