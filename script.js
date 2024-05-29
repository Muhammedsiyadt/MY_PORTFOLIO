// Add this to your script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.container, .container-fluid, .social-media, footer');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
