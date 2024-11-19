document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const sections = document.querySelectorAll('.section');

const revealSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + section.offsetHeight / 4) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
};

document.addEventListener('scroll', revealSection);
revealSection(); 
