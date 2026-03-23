let currentScreen = 1;

// Switch screens
function nextScreen() {
  document.getElementById(`screen${currentScreen}`).classList.remove("active");
  currentScreen++;
  document.getElementById(`screen${currentScreen}`).classList.add("active");
}

// Go to game
function goToGame() {
  document.getElementById("screen3").classList.remove("active");
  document.getElementById("screenGame").classList.add("active");
}

// Typing effect
const text = "Hey... I have something to tell you 💭";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Mini Game
let score = 0;
const heart = document.getElementById("heart");
const scoreText = document.getElementById("score");

function moveHeart() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);

  heart.style.left = x + "px";
  heart.style.top = y + "px";
}

heart.addEventListener("click", () => {
  score++;
  scoreText.innerText = score + " / 3";

  if (score >= 3) {
    document.getElementById("screenGame").classList.remove("active");
    document.getElementById("screen4").classList.add("active");
  } else {
    moveHeart();
  }
});

moveHeart();

// Proposal logic
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES button
yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "yayyyyyyy duduuuuuuu lesgooooooooo ";

  // Confetti
  for (let i = 0; i < 120; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = "red";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(confetti);
  }
});

// Button grow effect
yesBtn.addEventListener("mouseover", () => {
  yesBtn.style.transform = "scale(1.2)";
});

// Enable music on first click
document.body.addEventListener("click", () => {
  document.querySelector("audio").play();
}, { once: true });
