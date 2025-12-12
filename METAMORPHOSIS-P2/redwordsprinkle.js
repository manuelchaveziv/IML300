let words = ['Focus', 'Energy', 'Raw', 'Self', 'Discipline', 'Destined', 'Choice',
  'Live', 'Energy', 'Look', 'Know', 'Thyself', 'Want', 'Bleed', 'Consume', 'Practice',
  'Sacrifice', 'Patience', 'Do', 'Just Do', 'Feel', 'Responsibility', 'Potential',
  'Temet Nosche', 'Growing', 'Path', 'Choose', 'Free', 'Wild', 'Diligence'];
let wordObjects = [];

function setup() {
  describe('Words related to p5.js that fade in and out filling the canvas.');
  textFont('IBM Plex Mono');
  createCanvas(windowWidth, windowHeight); 
  textAlign(CENTER);
  
  let wordCount = floor((width * height) / 15000); 
  
  for (let i = 0; i < wordCount; i++) {
    wordObjects.push({
      word: random(words),
      x: random(50, width - 50), 
      y: random(50, height - 50),
      size: random(16, 48),
      alpha: 0,
      fadeSpeed: random(0.01, 0.03),
      fadingIn: true,
      delay: random(0, 60)
    });
  }
}

function draw() {
  background(0); 
  
  for (let obj of wordObjects) {
    if (obj.delay > 0) {
      obj.delay--;
      continue;
    }
    
    if (obj.fadingIn) {
      obj.alpha += obj.fadeSpeed;
      if (obj.alpha >= 1) {
        obj.alpha = 1;
        obj.fadingIn = false;
      }
    } else {
      obj.alpha -= obj.fadeSpeed;
      if (obj.alpha <= 0) {
        obj.alpha = 0;
        obj.fadingIn = true;
        obj.word = random(words);
        obj.x = random(50, width - 50);
        obj.y = random(50, height - 50);
      }
    }
    
    textSize(obj.size);
    fill(0, 255, 65, obj.alpha * 255); 
    text(obj.word, obj.x, obj.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  let newWordCount = floor((width * height) / 15000);
  
  if (wordObjects.length < newWordCount) {
    for (let i = wordObjects.length; i < newWordCount; i++) {
      wordObjects.push({
        word: random(words),
        x: random(50, width - 50),
        y: random(50, height - 50),
        size: random(16, 48),
        alpha: 0,
        fadeSpeed: random(0.01, 0.03),
        fadingIn: true,
        delay: random(0, 60)
      });
    }
  }
}