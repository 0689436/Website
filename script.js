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
