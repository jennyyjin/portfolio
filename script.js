document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

const sections = document.querySelectorAll('.section');
const revealSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + section.offsetHeight / 4) {
            section.classList.add('active');
        }
    });
};
document.addEventListener('scroll', revealSection);
revealSection();

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
});

document.addEventListener('DOMContentLoaded', () => {
    new Typed('.typed-text', {
        strings: ["Software Engineer & AI Researcher", "Turning Ideas into Reality"], 
        typeSpeed: 50, 
        backSpeed: 30, 
        backDelay: 1000, 
        loop: true, 
        showCursor: true, 
        cursorChar: "|", 
    });
});

const skillBars = document.querySelectorAll('.skill-bar');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !bar.querySelector('.skill-bar-fill')) {
            const level = bar.getAttribute('data-level');
            const fill = document.createElement('div');
            fill.classList.add('skill-bar-fill');
            bar.appendChild(fill);
            requestAnimationFrame(() => {
                fill.style.width = level;
            });
        }
    });
};
document.addEventListener('scroll', animateSkills);
animateSkills(); 

const projectModals = document.querySelectorAll('.modal');
const projectModalTriggers = document.querySelectorAll('.modal-trigger');
const projectCloseModalButtons = document.querySelectorAll('.close-modal');

projectModalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const modalId = trigger.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        modal.classList.add('active');
    });
});

projectCloseModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').classList.remove('active');
    });
});

projectModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

const experienceModals = document.querySelectorAll('.modal');
const experienceModalTriggers = document.querySelectorAll('.learn-more-btn');
const experienceCloseModalButtons = document.querySelectorAll('.close-modal');

experienceModalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const modalId = trigger.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        modal.classList.add('active');
    });
});

experienceCloseModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').classList.remove('active');
    });
});

experienceModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
