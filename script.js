// script.js

// Add scroll event listener to handle navbar transitions
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrolled = window.scrollY;

    if (scrolled > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const scrollPercentage = (scrolled / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
});

// Add smooth scroll to section functionality
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const target = document.getElementById(item.getAttribute('data-target'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add scroll event listener for project and about section animations
window.addEventListener('scroll', function() {
    const elementsToShow = document.querySelectorAll('.fade-in, .about-text, .about-image');
    const screenPosition = window.innerHeight / 1.3;

    elementsToShow.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
});

//contact  us secton 


  // Particle background
function createParticleBackground() {
    const canvas = document.getElementById('particle-background');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const particles = [];
    const particleCount = 100;
  
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }
  
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (let i = 0; i < particleCount; i++) {
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, ' + (Math.random() * 0.5 + 0.5) + ')';
        ctx.fill();
  
        p.x += p.dx;
        p.y += p.dy;
  
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
      }
    }
  
    animate();
  }
  
  // Form submission effect
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    this.style.transition = 'all 0.5s';
    this.style.transform = 'scale(0.9) translateY(-50px)';
    this.style.opacity = '0';
    
    setTimeout(() => {
      alert('Message transmitted to the future!');
      this.reset();
      this.style.transform = 'scale(1) translateY(0)';
      this.style.opacity = '1';
    }, 500);
  });
  
  // Initialize particle background
  window.addEventListener('load', createParticleBackground);
  window.addEventListener('resize', createParticleBackground);


  function toggleParticlesOnScroll() {
    const canvas = document.getElementById('particle-background');
    if (window.scrollY === 0) {
        canvas.style.display = 'block';
    } else {
        canvas.style.display = 'none';
    }
}
// Add this to your existing intersection observer setup
const footerElements = document.querySelectorAll('#contact .fade-in');
footerElements.forEach(el => observer.observe(el));

// Add this to your form submission logic
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent! (Replace this with your actual form handling code)');
});

// Add this script to your script.js file
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

window.addEventListener('load', function() {
  if (window.innerWidth > 768) {
      createParticleBackground();
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
      createParticleBackground();
  } else {
      const canvas = document.getElementById('particle-background');
      if (canvas) {
          canvas.style.display = 'none';
      }
  }
});
