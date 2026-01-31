// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
// ------------------------------------------------------------
// Helper: drawChefHat()
// ------------------------------------------------------------
function drawChefHat(x, y, scaleFactor = 1.2) {
  // slightly bigger by default
  push();
  translate(x, y);
  scale(scaleFactor);
  noStroke();
  fill(255);

  // ---- Top puffs ----
  ellipse(-35, 0, 50, 35);
  ellipse(0, -15, 60, 60); // bigger puff
  ellipse(35, 0, 50, 35);

  // ---- Base of the hat ----
  rectMode(CENTER);
  rect(0, 25, 100, 30, 8);

  // ---- Texture lines ----
  stroke(200); // light gray lines
  strokeWeight(2);
  // draw 3 vertical lines evenly spaced
  line(-25, 15, -25, 35);
  line(0, 15, 0, 35);
  line(25, 15, 25, 35);

  pop();
}

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
function drawStart() {
  // ---- Background ----
  background(255, 243, 153); // yellow

  // ---- Chef hat icon ----
  drawChefHat(width / 2, 100, 1); // Make sure drawChefHat is defined

  // ---- Title text ----
  fill(64, 30, 7); // brown
  textSize(60);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  text("Chef It Up!", width / 2, 225);

  // ---- Main Buttons ----
  const startBtn = {
    x: width / 2,
    y: 360,
    w: 500,
    h: 90,
    label: "Start cooking before the head chef yells at you",
  };

  const gossipBtn = {
    x: width / 2,
    y: 480,
    w: 500,
    h: 90,
    label:
      "Catch up with my fellow chef about the latest celebrity chef gossip >:)",
  };

  drawButton(startBtn);
  drawButton(gossipBtn);

  // ---- Cursor feedback ----
  cursor(isHover(startBtn) || isHover(gossipBtn) ? HAND : ARROW);

  // ---- Tip Button (custom styling) ----
  const tipBtn = { x: width - 90, y: height - 90, w: 120, h: 50, label: "TIP" };

  // Draw tip button rectangle
  push();
  rectMode(CENTER);
  noStroke(); // no border
  fill(64, 30, 7); // dark brown fill
  if (isHover(tipBtn)) {
    fill(90, 45, 15); // slightly lighter when hovered
  }
  rect(tipBtn.x, tipBtn.y, tipBtn.w, tipBtn.h, 14);
  pop();

  // Draw tip button text
  noStroke();
  fill(255, 250, 201); // light yellow text
  textSize(16);
  textAlign(CENTER, CENTER);
  text(tipBtn.label, tipBtn.x, tipBtn.y);

  // ---- Hover tip text ----
  if (isHover(tipBtn)) {
    fill(64, 30, 7);
    textSize(14);
    textAlign(RIGHT, BOTTOM);
    text("Choose an option to see what happens!", width - 20, height - 140);
  }
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
function startMousePressed() {
  const startBtn = { x: width / 2, y: 360, w: 500, h: 90 };
  const gossipBtn = { x: width / 2, y: 480, w: 500, h: 90 };

  if (isHover(startBtn)) {
    currentScreen = "prep"; // Start game
  } else if (isHover(gossipBtn)) {
    currentScreen = "fired"; // Go to instructions
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------

function startKeyPressed() {
  if (key === "1" || key === "A" || key === "a") currentScreen = "prep";
  else if (key === "2" || key === "B" || key === "B") currentScreen = "fired";
}
// ------------------------------------------------------------
// Helper: drawButton()
// ------------------------------------------------------------
function drawButton({ x, y, w, h, label }) {
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
