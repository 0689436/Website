const themeToggle = document.getElementById("theme-toggle");
let darkMode = true;

// Initialize theme based on default body class
if (!document.body.classList.contains("dark-mode")) {
  darkMode = false;
}

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);

  const icon = themeToggle.querySelector(".theme-icon");

  if (darkMode) {
    // Sun icon
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" />
      <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.78 4.22L17.66 6.34M6.34 17.66L4.22 19.78M19.78 19.78L17.66 17.66M6.34 6.34L4.22 4.22"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    `;
  } else {
    // Moon icon
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.78 4.22L17.66 6.34M6.34 17.66L4.22 19.78M19.78 19.78L17.66 17.66M6.34 6.34L4.22 4.22"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    `;
  }

  // Ripple animation
  const ripple = themeToggle.querySelector(".ripple");
  ripple.style.transform = "scale(0)";
  setTimeout(() => {
    ripple.style.transform = "scale(1.2)";
  }, 10);
});

// Confetti effect
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
function createConfetti(x, y) {
  for (let i = 0; i < 20; i++) {
    confetti.push({
      x,
      y,
      dx: (Math.random() - 0.5) * 10,
      dy: Math.random() * -5 - 2,
      radius: Math.random() * 5 + 2,
      color: ['#6366F1', '#EC4899', '#FBBF77'][Math.floor(Math.random() * 3)],
      life: 100
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    c.x += c.dx;
    c.y += c.dy;
    c.life -= 1;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();

    if (c.life <= 0) confetti.splice(i, 1);
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();

// Trigger confetti on card click/hover
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createConfetti(x, y);
  });

  card.addEventListener('mouseenter', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createConfetti(x, y);
  });
});
