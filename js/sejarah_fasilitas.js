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

const stickySection = document.querySelector('.sticky');

window.addEventListener('scroll', () => {
    transform(stickySection);
});


function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll-section');
    const scrollWidth = scrollSection.scrollWidth;
    const containerWidth = section.offsetWidth;
    
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
    
    const maxScroll = scrollWidth - containerWidth;
    const scrollAmount = (percentage / 100) * maxScroll;
    
    scrollSection.style.transform = `translate3d(-${scrollAmount}px, 0, 0)`;
}

const popUp = document.getElementById('popUp');

function openOverlay(element) {
  const title = element.getAttribute('data-title');
  const imgSrc = element.getAttribute('data-img');
  const img1 = element.getAttribute('data-img-1');
  const img2 = element.getAttribute('data-img-2');
  const img3 = element.getAttribute('data-img-3');
  const desc = element.getAttribute('data-desc');

  document.querySelector('#popUp h3').textContent = title;
  document.getElementById('img-lead').src = imgSrc;
  document.querySelector('#popUp p').textContent = desc;

  const gallery1 = document.getElementById('img-gallery-1');
  const gallery2 = document.getElementById('img-gallery-2');
  const gallery3 = document.getElementById('img-gallery-3');

  const col1 = gallery1.closest('.col');
  const col2 = gallery2.closest('.col');
  const col3 = gallery3.closest('.col');

  if (img1) {
    gallery1.src = img1;
    col1.style.display = '';
  } else {
    col1.style.display = 'none';
  }

  if (img2) {
    gallery2.src = img2;
    col2.style.display = '';
  } else {
    col2.style.display = 'none';
  }

  if (img3) {
    gallery3.src = img3;
    col3.style.display = '';
  } else {
    col3.style.display = 'none';
  }

  popUp.classList.remove('d-none');
  setTimeout(() => {
    popUp.classList.add('show');
    document.body.classList.add('overflow-hidden');
  }, 10);
}

function closeOverlay() {
  popUp.classList.remove('show');
  document.body.classList.remove('overflow-hidden');

  setTimeout(() => {
    popUp.classList.add('d-none');
  }, 400);
}

AOS.init();