const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// Move NO button when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button click
yesBtn.addEventListener("click", () => {
  message.innerText = "Yayyy! I love you too ❤️🥹";
});
