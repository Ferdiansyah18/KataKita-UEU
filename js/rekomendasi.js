const navbar = document.getElementById('navbar-container');
const navItems = document.querySelectorAll('.nav-items');
const navToggler = document.getElementById('navToggler');
const navIcon = document.getElementById('navIcon');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navItems.forEach(item => item.style.color = "white");
        navToggler.classList.add('nav-toggler-white');
        navIcon.classList.add('navbar-toggler-icon-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navItems.forEach(item => item.style.color = "black");
        navToggler.classList.remove('nav-toggler-white');
        navIcon.classList.remove('navbar-toggler-icon-scrolled');
    }
});

AOS.init();