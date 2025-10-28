function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // Subtle fade effect for soft trailing
  background(0, 0, 0, 30);
  
  // Draw many layers with very low opacity for soft glow
  noStroke();
  
  // Create soft gradient with many layers
  for (let r = 120; r > 0; r -= 8) {
    let alpha = map(r, 0, 120, 8, 0); // Very low opacity values
    fill(0, 255, 0, alpha);
    circle(mouseX, mouseY, r);
  }
  
  // Soft core
  fill(0, 255, 150, 15);
  circle(mouseX, mouseY, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}