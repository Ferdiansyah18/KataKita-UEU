const navbar = this.document.getElementById('navbar-container');

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

function menuButton() {
    navbar.classList.toggle('navbar-clicked')
}