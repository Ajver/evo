
var cells = [];
var col, row;

var zoom = 1.0;

function setup() {
  createCanvas(400, 400);
  
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
  if(keyCode == 187 || keyCode == 190) {
    zoom *= 1.05;
    zoom = min(zoom, 2.0);
  }else if(keyCode == 189 || keyCode == 188) {
    zoom *= 0.95;
    zoom = max(zoom, 0.5);
  }
  //console.log("key pressed: " + keyCode);
}
