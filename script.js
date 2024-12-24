// Script to log button clicks (optional)
document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button clicked: ${button.textContent}`);
    });
});
