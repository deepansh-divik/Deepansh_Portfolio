document.addEventListener("DOMContentLoaded", function() {
    loadSection('home');
});

function loadSection(section) {
    const sections = {
        home: 'sections/home.html',
        about: 'sections/about.html',
        skills: 'sections/skills.html',
        certifications: 'sections/certifications.html',
        projects: 'sections/projects.html'
    };

    fetch(sections[section])
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            document.querySelectorAll('.navbar a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            document.querySelector(`.navbar a[href="#${section}"]`).classList.add('active');

            // Re-initialize Typed.js if it's the home section
            if (section === 'home') {
                new Typed(".text", {
                    strings: ["Frontend Developer", "Backend Developer", "Software Developer"],
                    typeSpeed: 100,
                    backSpeed: 100,
                    backDelay: 1000,
                    loop: true
                });
            }
        })
        .catch(error => console.error('Error loading section:', error));
}
