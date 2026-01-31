// ------------------------------------------------------------
// prep.js = the “prep” screen
// ------------------------------------------------------------

// ------------------------------------------------------------
// ------------------------------------------------------------
// Main draw function for prep screen
// ------------------------------------------------------------
function drawPrep() {
  // ---- Background ----
  background(255, 243, 153);

  // ---- Screen title ----
  fill(64, 30, 7); // brown
  textAlign(CENTER, TOP);
  textSize(36);
  text("Time to get started!", width / 2, 80);

  // ---- Instruction text ----
  textSize(18);
  const lines =
    "The head chef is telling you to hurry up because customers are waiting :O\n" +
    "What do you do?";
  text(lines, width / 2, 160);

  // ---- Clock icon ----
  drawClock(width / 2, 270, 50); // x, y, radius

  // ---- Placeholder buttons ----
  const chopBtn = {
    x: width / 2,
    y: 380,
    w: 400,
    h: 80,
    label: "Prep my ingredients quickly but carefully!",
  };
  const rushBtn = {
    x: width / 2,
    y: 500,
    w: 400,
    h: 80,
    label: "Chop with 10 knives as fast as I can.\nPerfection doesn't matter",
  };

  drawPrepButton(chopBtn);
  drawPrepButton(rushBtn);

  // ---- Cursor feedback ----
  if (isHover(chopBtn) || isHover(rushBtn)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

// ------------------------------------------------------------
// Helper function: drawClock()
// ------------------------------------------------------------
function drawClock(x, y, radius) {
  push();
  translate(x, y);

  // ---- Clock face ----
  fill(255);
  stroke(64, 30, 7);
  strokeWeight(3);
  ellipse(0, 0, radius * 2);

  // ---- Clock ticks ----
  strokeWeight(2);
  for (let angle = 0; angle < 360; angle += 30) {
    // 12 ticks
    const inner = radius * 0.8;
    const outer = radius;
    const rad = radians(angle);
    line(
      inner * cos(rad),
      inner * sin(rad),
      outer * cos(rad),
      outer * sin(rad),
    );
  }

  // ---- Clock hands ----
  stroke(64, 30, 7);
  strokeWeight(3);
  // Hour hand
  line(0, 0, 0, -radius * 0.5);
  // Minute hand
  strokeWeight(2);
  line(0, 0, radius * 0.6, 0);

  pop();
}

// ------------------------------------------------------------
// Mouse input for prep screen
// ------------------------------------------------------------
// ------------------------------------------------------------
// Mouse input for prep screen
// ------------------------------------------------------------
function prepMousePressed() {
  // Define the buttons again so we can check hover
  const chopBtn = { x: width / 2, y: 380, w: 400, h: 80 };
  const rushBtn = { x: width / 2, y: 500, w: 400, h: 80 };

  if (isHover(chopBtn)) {
    currentScreen = "game"; // Go to the game screen
  } else if (isHover(rushBtn)) {
    currentScreen = "fired"; // Go directly to fired screen
  }
}

// ------------------------------------------------------------
// Keyboard input for prep screen
// ------------------------------------------------------------
function prepKeyPressed() {
  if (key === "1" || key === "A" || key === "a") currentScreen = "game";
  else if (key === "2" || key === "B" || key === "b") currentScreen = "fired";
}

// ------------------------------------------------------------
// Button drawing helper (prep screen)
// ------------------------------------------------------------
function drawPrepButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  // ---- Draw button rectangle with stroke ----
  stroke(64, 30, 7); // brown outline for button
  strokeWeight(2);

  if (hover) {
    fill(255, 200, 150, 220); // hover color
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 250, 201, 210); // normal color
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  rect(x, y, w, h, 14); // rectangle with stroke
  drawingContext.shadowBlur = 0;

  // ---- Draw text without stroke ----
  noStroke(); // disable stroke for text
  fill(64, 30, 7);
  textSize(18);
  textAlign(CENTER, CENTER);
  textLeading(22);
  text(label, x, y, w - 40, h - 20);
}
