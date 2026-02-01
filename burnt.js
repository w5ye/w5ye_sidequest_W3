// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------
// Button data
// ------------------------------
const stillServeBtn = {
  x: 400,
  y: 450,
  w: 300,
  h: 90,
  label: "Serve anyway",
};

// ------------------------------
// Main draw function
// ------------------------------
// Called only when currentScreen === "burnt"
function drawBurnt() {
  // Red/orange background to suggest failure
  background(255, 200, 180);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(36);
  text("Oh no... it's burnt.", width / 2, 260);

  // Subtext
  textSize(18);
  text(
    "The dish smells bad and looks worse.\nDo you still serve it?",
    width / 2,
    320,
  );

  // Draw the button
  drawBurntButton(stillServeBtn);

  // Burnt chicken graphic
  drawBurntChicken(width / 2, 150);

  // Cursor feedback
  cursor(isHover(stillServeBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
function drawBurntButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  stroke(64, 30, 7);
  strokeWeight(2);

  if (hover) {
    fill(255, 150, 150);
  } else {
    fill(255, 180, 180);
  }

  rect(x, y, w, h, 14);

  noStroke();
  fill(64, 30, 7);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function drawBurntChicken(x, y) {
  push();
  translate(x, y);
  rectMode(CENTER);
  ellipseMode(CENTER);

  // Plate
  fill(220);
  noStroke();
  ellipse(0, 20, 160, 40);

  // Burnt chicken body
  fill(60); // very dark brown / almost black
  stroke(30);
  strokeWeight(2);
  ellipse(0, 0, 120, 70);

  // Burn marks
  noStroke();
  fill(30);
  ellipse(-20, -10, 25, 15);
  ellipse(15, 5, 30, 18);
  ellipse(0, 10, 20, 12);

  // Bone
  stroke(200);
  strokeWeight(4);
  line(60, -5, 90, -15);
  ellipse(92, -15, 10, 10);

  pop();
}

// ------------------------------
// Mouse input
// ------------------------------
function burntMousePressed() {
  if (isHover(stillServeBtn)) {
    currentScreen = "fired";
  }
}

// ------------------------------
// Keyboard input
// ------------------------------
function burntKeyPressed() {
  // ENTER also serves the dish
  if (keyCode === ENTER) {
    currentScreen = "fired";
  }
}
