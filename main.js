const ham = document.querySelector('.ham');
const navList = document.querySelector('nav ul');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    navList.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ['Front End Developer', 'Singer', 'Neurosurgeon', 'Writer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
})