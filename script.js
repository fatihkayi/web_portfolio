// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        navLinks.classList.add('active');
        menuOpen = true;
    } else {
        navLinks.classList.remove('active');
        menuOpen = false;
    }
});

// Project Data
const projects = [
    {
        title: 'E-commerce Website',
        description: 'A fully responsive e-commerce website built with HTML, CSS, and JavaScript.',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: 'Task Manager App',
        description: 'A task management application with local storage functionality.',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: 'Weather Dashboard',
        description: 'A weather application that fetches data from a weather API.',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    }
];

// Dynamically Load Projects
const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Clear form
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (menuOpen) {
            navLinks.classList.remove('active');
            menuOpen = false;
        }
    });
});