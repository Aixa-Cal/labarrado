document.addEventListener('DOMContentLoaded', function() {
  window.scrollTo(0, 0); // Asegura que la página se cargue en la parte superior

  const banner = document.querySelector('.banner');
  const navbar = document.querySelector('.navbar');
  const mobileMenuButton = document.getElementById('mobile-menu');
  const totalOffset = navbar.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          banner.style.top = '-85px'; // Esconde el banner
          navbar.style.top = '0';     // Mantiene el navbar fijo en la parte superior
      } else {
          if (scrollTop <= 0) {
              banner.style.top = '0';  // Muestra el banner
              navbar.style.top = '85px'; // Ajusta la posición del navbar
          }
      }
      lastScrollTop = scrollTop;
  });

  document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - totalOffset,
                  behavior: 'smooth'
              });
          }
      });
  });

  mobileMenuButton.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });
});