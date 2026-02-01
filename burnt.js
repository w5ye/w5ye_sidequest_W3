// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------
// Button data
// ------------------------------
const serveBtn = {
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
  drawBurntButton(serveBtn);

  // Cursor feedback
  cursor(isHover(serveBtn) ? HAND : ARROW);
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

// ------------------------------
// Mouse input
// ------------------------------
function burntMousePressed() {
  if (isHover(serveBtn)) {
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
