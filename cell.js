var cw = 10;

function Cell(x, y, col) {
  this.x = x;
  this.y = y;
  this.col = col;
  
  this.draw = function() {
    noStroke();
    ellipseMode(CORNER);
    fill(this.col[0], this.col[1], this.col[2]);
    ellipse(this.x, this.y, cw);
  }
}