
var cells = [];
var col, row;

function setup() {
  createCanvas(500, 500);
  
  col = width / cw;
  row = height / cw;
  
  for(let i=0; i<100; i++) {
    let color = [];
    color[0] = random(256);
    color[1] = random(256);
    color[2] = random(256);
    
    let x = floor(random(col))*cw;
    let y = floor(random(row))*cw;
    console.log("xy: " + x + ' ' + y);
    let cell = new Cell(x, y, color);
    cells.push(cell);
  }

}

function draw() {
  background(0);
  
  for(let i=0; i<cells.length; i++) {
    cells[i].draw();
  }
}