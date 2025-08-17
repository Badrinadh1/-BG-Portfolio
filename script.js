function linkedinlink() {
    window.open("https://www.linkedin.com/in/badrinadh-gada-8513b5184/", "_blank");
}

function githublink() {
    window.open("https://github.com/Badrinadh1", "_blank");
}

function openmail() {
    window.location.href = "mailto:badrinadhgada0510@gmail.com";
}

// Create animated particles
function createParticles() {
    const particles = document.getElementById('particles');
    if (particles) {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particles.appendChild(particle);
        }
    }
}
createParticles();

// Scroll progress bar
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}
window.addEventListener('scroll', updateProgressBar);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});