
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Add smooth scrolling for anchor links
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
    
    // Add animation delays to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add scroll animations
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
    
    // Observe all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add typing effect to profile name
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        const originalText = profileName.textContent;
        profileName.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                profileName.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Add particle effect on skill tag hover
    const skillTagsHover = document.querySelectorAll('.skill-tag');
    skillTagsHover.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Add glitch effect to headings on hover
    const headings = document.querySelectorAll('.content-heading');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px currentColor, 2px 2px 0px #ff6b00, -2px -2px 0px #00ffff';
        });
        
        heading.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 10px currentColor';
        });
    });
});

// Download Resume Function
function downloadResume() {
    // Create a simple alert for now - replace with actual resume download logic
    alert('Resume download functionality would be implemented here. Please contact Sai Teja directly for the resume.');
    
    // Example of how you might implement actual download:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/resume.pdf';
    // link.download = 'Madda_Sai_Teja_Resume.pdf';
    // link.click();
}

// Add smooth hover animations
function addHoverAnimations() {
    const hoverElements = document.querySelectorAll('.glass-panel, .skill-tag, .resume-btn');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// Initialize hover animations
document.addEventListener('DOMContentLoaded', addHoverAnimations);

// Add parallax effect to floating orbs
function addParallaxEffect() {
    const orbs = document.querySelectorAll('.floating-orb');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', addParallaxEffect);

// Console greeting
console.log(`
🚀 Welcome to Sai Teja's Portfolio!
💻 Built with HTML, CSS, and JavaScript
🎨 Featuring a futuristic dark theme
📧 Contact: saiteja8328@gmail.com
`);
