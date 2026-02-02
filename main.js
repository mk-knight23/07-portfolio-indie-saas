// Indie SaaS Portfolio - Main JavaScript
// Simple interactions for enhanced UX

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active nav link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('text-amber-600');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('text-amber-600');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Add subtle parallax effect to cards on scroll
    const cards = document.querySelectorAll('.indie-card');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                cards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                    if (isVisible) {
                        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                        const offset = (scrollProgress - 0.5) * 10;
                        card.style.transform = `translateY(${offset * 0.5}px)`;
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Console easter egg for fellow developers
    console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #f59e0b;');
    console.log('%cThanks for checking out my portfolio. Let\'s build something amazing together!', 'font-size: 14px; color: #78716c;');
    console.log('%c→ github.com/mk-knight23', 'font-size: 12px; color: #d97706;');
});
