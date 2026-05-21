/* ========================
   TYPING EFFECT
======================== */

const typingText = document.querySelector(".typing-text");
const words = [
    "Frontend Developer",
    "Web Designer",
    "MERN Stack Enthusiast",
    "UI/UX Designer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 120;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
        typeSpeed = 60;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
        typeSpeed = 120;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 200;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

typeEffect();

/* ========================
   SMOOTH SCROLL ANIMATION
======================== */

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

/* ========================
   ACTIVE NAVIGATION
======================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar-nav a");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 250) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

/* ========================
   SCROLL REVEAL ANIMATION
======================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

/* ========================
   SKILL PROGRESS ANIMATION
======================== */

const skillProgressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const percentage = bar.style.getPropertyValue('--percentage');
                bar.style.animation = `fillBar 1.5s ease-out forwards`;
                skillProgressObserver.unobserve(entry.target);
            });
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills-card');
if (skillsSection) {
    skillProgressObserver.observe(skillsSection);
}

/* ========================
   PARALLAX EFFECT - REMOVED
======================== */
// Parallax effect removed for simple photo frame design

/* ========================
   PROJECT CARD INTERACTIONS
======================== */

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    
    const link = card.querySelector('.project-link');
    if (link) {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.project-link')) {
                // Add click interaction
                console.log('Project card clicked');
            }
        });
    }
});

/* ========================
   FORM SUBMISSION
======================== */

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            background: linear-gradient(135deg, #00c3ff, #7c3aed);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            margin-top: 15px;
            text-align: center;
            animation: slideInUp 0.5s ease-out;
        `;
        successMsg.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        
        contactForm.appendChild(successMsg);
        
        // Clear form
        inputs.forEach(input => input.value = '');
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMsg.style.opacity = '0';
            successMsg.style.transform = 'translateY(20px)';
            setTimeout(() => successMsg.remove(), 300);
        }, 5000);
    });
}

/* ========================
   FLOATING PARTICLES ANIMATION
======================== */

function createParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: radial-gradient(circle, rgba(0,195,255,0.5), transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 20}s infinite ease-in-out;
            opacity: ${Math.random() * 0.5 + 0.3};
        `;
        particlesContainer.appendChild(particle);
    }
}

createParticles();

/* ========================
   SMOOTH PAGE LOAD
======================== */

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/* ========================
   DARK MODE TOGGLE (Optional)
======================== */

// You can implement dark/light mode toggle here
// For now, the portfolio uses a fixed dark theme

/* ========================
   CLICK RIPPLE EFFECT
======================== */

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    `;
    
    button.style.position = 'relative';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
});

/* ========================
   KEYBOARD SHORTCUTS
======================== */

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K: Focus search or show shortcuts info
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Keyboard shortcuts active');
    }
});

/* ========================
   LAZY LOADING FOR IMAGES
======================== */

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';

        const showImage = () => {
            img.style.opacity = '1';
        };
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.complete) {
                        showImage();
                    } else {
                        img.addEventListener('load', showImage, { once: true });
                        img.addEventListener('error', showImage, { once: true });
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        imageObserver.observe(img);
    });
}

/* ========================
   SMOOTH TRANSITIONS
======================== */

// Add smooth transition on page navigation
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && link.href.includes('#')) {
        document.body.style.transition = 'opacity 0.3s ease';
    }
});

/* ========================
   CURSOR EFFECTS
======================== */

const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #00c3ff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.5;
    display: none;
`;

document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = (mouseX - 10) + 'px';
    cursor.style.top = (mouseY - 10) + 'px';
});

// Show custom cursor on hover of interactive elements
document.querySelectorAll('a, button, .project-card, .contact-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
        cursor.style.borderColor = '#7c3aed';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    });
});

console.log('Portfolio loaded successfully! 🚀');
