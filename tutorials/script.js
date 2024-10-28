document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section-card, .footer');
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Dark/Light Mode Toggle
    let isDarkMode = true; // Default to dark mode

    modeToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        isDarkMode = !isDarkMode; // Toggle the mode

        if (isDarkMode) {
            document.body.classList.remove('light-mode'); // Remove light mode class
            modeIcon.src = 'resources/images/dark.svg'; // Dark mode icon
        } else {
            document.body.classList.add('light-mode'); // Add light mode class
            modeIcon.src = 'resources/images/light.svg'; // Light mode icon
        }
    });
});

