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
  label: "Serve customer",
};

// ------------------------------
// Main draw function
// ------------------------------
// Called only when currentScreen === "cooked"
function drawCooked() {
  // Warm, pleasant background
  background(220, 255, 220);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(36);
  text("Perfectly cooked!", width / 2, 260);

  // Subtext
  textSize(18);
  text(
    "The dish looks amazing and smells incredible.\nReady to serve?",
    width / 2,
    320,
  );

  // Draw the button
  drawCookedButton(serveBtn);

  // Cursor feedback
  cursor(isHover(serveBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
function drawCookedButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  stroke(64, 30, 7);
  strokeWeight(2);

  if (hover) {
    fill(180, 255, 180);
  } else {
    fill(200, 255, 200);
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
function cookedMousePressed() {
  if (isHover(serveBtn)) {
    currentScreen = "promoted";
  }
}

// ------------------------------
// Keyboard input
// ------------------------------
function cookedKeyPressed() {
  // ENTER serves the customer
  if (keyCode === ENTER) {
    currentScreen = "promoted";
  }
}
