// Sticky header on scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var header = document.getElementById("header");
    if (window.pageYOffset > 50) {
        navbar.classList.add("sticky");
        header.style.fontSize = "32px";
    } else {
        navbar.classList.remove("sticky");
        header.style.fontSize = "48px";
    }

    // Trigger animation on scroll for projects
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            project.style.opacity = 1;
            project.style.transform = 'translateY(0)';
        }
    });
}

// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
