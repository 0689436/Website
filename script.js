// Toggle Dark and Light Mode
const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Toggle button icon
    toggleModeButton.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});
