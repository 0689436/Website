
const switchInput = document.getElementById('theme-switch');
const body = document.body;

// Set based on browser preference unless saved
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  body.classList.add('dark-theme');
  switchInput.checked = true;
}

// Toggle on click
switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
