// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const gameBtn = {
  x: 400, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Start baking", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
// Main draw function for this screen
// ------------------------------
function drawGame() {
  // Set background colour for the game screen
  background(255, 243, 153);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Time to bake your dish!", width / 2, 160);

  textSize(18);
  text(
    "Click the button (or press ENTER) \n" +
      "to reveal what happened in there (hopefully not burnt...)",
    width / 2,
    210,
  );

  // ---- Draw oven graphic ----
  drawOven(width / 2, 380, 120, 100); // x, y, width, height

  // ---- Draw the button ----
  drawGameButton(gameBtn);

  // ---- Cursor feedback ----
  cursor(isHover(gameBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
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
  textSize(24);
  textAlign(CENTER, CENTER);
  textLeading(22);
  text(label, x, y, w - 40, h - 20);
}
// Helper: drawOven()
// ------------------------------
function drawOven(x, y, w, h) {
  push();
  rectMode(CENTER);

  // Oven body
  fill(200); // light gray
  stroke(64, 30, 7);
  strokeWeight(2);
  rect(x, y, w, h, 8);

  // Oven window
  fill(255, 255, 200, 180); // light yellow for glass
  rect(x, y - h * 0.1, w * 0.6, h * 0.5, 4);

  // Oven knobs
  const knobY = y + h * 0.3;
  const knobSpacing = w * 0.2;
  fill(150);
  for (let i = -1; i <= 1; i++) {
    ellipse(x + i * knobSpacing, knobY, 15, 15);
  }

  pop();
}
// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn)) {
    triggerRandomOutcome();
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === ENTER) {
    triggerRandomOutcome();
  }
}

// ------------------------------
// Game logic: win or lose
// ------------------------------
// This function decides what happens next in the game.
// It does NOT draw anything.
function triggerRandomOutcome() {
  // random() returns a value between 0 and 1
  // Here we use a 50/50 chance:
  // - less than 0.5 → win
  // - 0.5 or greater → lose
  //
  // You can bias this later, for example:
  // random() < 0.7 → 70% chance to win
  if (random() < 0.5) {
    currentScreen = "cooked";
  } else {
    currentScreen = "burnt";
  }
}
