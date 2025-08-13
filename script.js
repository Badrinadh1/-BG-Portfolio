
        // Add scroll animations
        function linkedinlink(){
            window.open("https://www.linkedin.com/in/badrinadh-gada-8513b5184/", "_blank");
          }

        function githublink(){
            window.open("https://github.com/Badrinadh1", "_blank");
        }
        function openmail() {
            window.location.href = "mailto:badrinadhgada0510@gmail.com";    
        }
            const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0%';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Add some interactive effects
        document.querySelectorAll('.project-card, .skill-category, .cert-item').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });