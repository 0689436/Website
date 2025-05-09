const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Detect system preference on first visit
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  body.classList.add('dark-theme');
  themeSwitch.checked = true;
}

// Toggle theme on switch
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
