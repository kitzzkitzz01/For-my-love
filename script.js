function checkPassword() {
  const password = document.getElementById("password").value;

  if (password === "kriki") {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    const music = document.getElementById("bgMusic");
    if (music) {
      music.play().catch(() => {});
    }
  } else {
    document.getElementById("wrong").innerHTML =
      "Wrong password 🥺❤️ Try again";
  }
}

document.getElementById("loveBtn").onclick = function () {
  document.getElementById("letter").style.display = "block";

  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
};

document.getElementById("finalBtn").onclick = function () {
  confetti({
    particleCount: 300,
    spread: 180,
    origin: { y: 0.6 }
  });

  alert("❤️ Happy 8th Anniversary ❤️\n\nI love you today, tomorrow and forever. 🥹❤️");
};

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 350);
