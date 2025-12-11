function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 0, 0, 30);
  
  noStroke();
  
  for (let r = 120; r > 0; r -= 8) {
    let alpha = map(r, 0, 120, 8, 0); 
    fill(0, 255, 0, alpha);
    circle(mouseX, mouseY, r);
  }
  
  fill(0, 255, 150, 15);
  circle(mouseX, mouseY, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}