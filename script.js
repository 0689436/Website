const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Check if the user has a saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleBtn.textContent = '🌞';  // Switch to light mode icon
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save the theme preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '🌞';  // Switch to light mode icon
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '🌙';  // Switch to dark mode icon
  }
});
