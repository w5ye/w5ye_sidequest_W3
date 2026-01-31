// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawInstr() → what the instructions screen looks like
// 2) input handlers → how the player returns to the start screen
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for instructions screen
// ------------------------------
// drawInstr() is called from main.js
// only when currentScreen === "instr"
function drawFired() {
  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("You got fired...", width / 2, 80);

  // ---- Instruction text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line instructions
  const lines =
    "Sadly your coworker ratted you out.\n" + "Good luck finding a new job!";

  text(lines, width / 2, 160);

  // ---- Icon ----
  drawScoldingIcon(width / 2, 350, 2); // centered, adjust y as needed

  // ---- Back button ----
  // This button lets the player return to the start screen
  const backBtn = {
    x: width / 2, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Try again",
  };

  // Draw the back button
  drawFiredButton(backBtn);

  // Change cursor when hovering over the button
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "fired"
function firedMousePressed() {
  // Button data must match the draw position
  const backBtn = { x: width / 2, y: 560, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}

// ------------------------------
// Keyboard input for instructions screen
// ------------------------------
// Provides keyboard-only navigation
function firedKeyPressed() {
  // ESC is a common “go back” key in games and apps
  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }

  // B key is an additional, explicit shortcut for “back”
  if (key === "b" || key === "B") {
    currentScreen = "start";
  }
}

// ------------------------------
// Button drawing helper (instructions screen)
// ------------------------------
// This function is only responsible for drawing the button.
// It is kept separate so the visual style can be changed
// without touching input or game logic.
function drawFiredButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check whether the mouse is hovering over the button
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Subtle colour change on hover for visual feedback
  fill(hover ? color(200, 200, 255, 200) : color(220, 220, 255, 170));

  // Draw the button shape
  rect(x, y, w, h, 12);

  // Draw the button text
  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
// ------------------------------------------------------------
// Helper: drawScoldingIcon()
// ------------------------------------------------------------
// Draws a simple icon of a head chef scolding another chef
function drawScoldingIcon(x, y, scaleFactor = 1) {
  push();
  translate(x, y);
  scale(scaleFactor);
  noStroke();

  // ---- Head chef ----
  fill(255, 230, 200); // skin tone
  ellipse(-50, 0, 40, 40); // head
  fill(255); // white chef hat
  rect(-50, -25, 50, 20, 6); // hat base
  ellipse(-50, -35, 60, 25); // hat top puff

  // ---- Other chef ----
  fill(255, 230, 200); // skin tone
  ellipse(50, 0, 40, 40); // head
  fill(255); // white chef hat
  rect(50, -25, 50, 20, 6); // hat base
  ellipse(50, -35, 60, 25); // hat top puff

  // ---- Bodies ----
  fill(200, 50, 50); // red jacket for scolding chef
  rect(-50, 40, 25, 50, 6); // head chef body
  fill(50, 150, 200); // blue jacket for other chef
  rect(50, 40, 25, 50, 6); // other chef body

  // ---- Arms ----
  stroke(200, 50, 50);
  strokeWeight(4);
  line(-35, 30, -10, 10);

  noStroke();

  // ---- Scolding symbol (exclamation) ----
  fill(255, 0, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("!", -50, -50); // above head chef

  // ---- Sad face on other chef ----
  fill(0); // eyes color
  ellipse(45, -5, 5, 5); // left eye
  ellipse(55, -5, 5, 5); // right eye
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(50, 10, 15, 10, PI, 0); // frown
  // ---- Evil eyes ----
  fill(0);
  ellipse(-55, -5, 5, 5); // left eye
  ellipse(-45, -5, 5, 5); // right eye

  // ---- Tilted eyebrows ----
  stroke(0);
  strokeWeight(2);
  // left eyebrow tilted down toward center
  line(-60, -10, -50, -8);
  // right eyebrow tilted down toward center
  line(-45, -8, -35, -10);

  // ---- Evil coworker smile (same as the happy one before) ----
  noFill();
  stroke(0);
  strokeWeight(2);
  // Bigger upward curve for a full smile
  arc(-50, 5, 25, 15, 0, PI);
  pop();
}
