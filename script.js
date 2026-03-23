let score = 0;
const heart = document.getElementById("heart");
const scoreText = document.getElementById("score");

// Move heart randomly
function goToGame() {
  document.getElementById("screen3").classList.remove("active");
  document.getElementById("screenGame").classList.add("active");
}
function moveHeart() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);

  heart.style.left = x + "px";
  heart.style.top = y + "px";
}

// Click event
heart.addEventListener("click", () => {
  score++;
  scoreText.innerText = score + " / 3";

  if (score >= 3) {
    // Move to proposal screen
    document.getElementById("screenGame").classList.remove("active");
    document.getElementById("screen4").classList.add("active");
  } else {
    moveHeart();
  }
});

// Start position
moveHeart();
