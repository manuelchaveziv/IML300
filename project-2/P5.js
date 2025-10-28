function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  mickey(100, 300);
  mickey(300, 200);
  mickey (100, 100);

}

function mickey (x, y){
  circle(x, y, 100); //face
  circle(x-50, y-50, 50); // left ear
  circle(x+50, y-50, 50); //right ear
  

}