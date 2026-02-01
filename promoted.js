// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------
// Main draw function
// ------------------------------
// Called only when currentScreen === "promoted"
function drawPromoted() {
  background(200, 220, 255);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("You're promoted!", width / 2, 300);

  // Subtext
  textSize(20);
  text(
    "The customer loved it.\nThe head chef gives you a raise 🎉",
    width / 2,
    360,
  );

  textSize(16);
  text("Press R to return to Start", width / 2, 420);
}

// ------------------------------
// Mouse input
// ------------------------------
function promotedMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input
// ------------------------------
function promotedKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
