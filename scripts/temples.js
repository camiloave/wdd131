// const hamburger = document.querySelector("hamburger");
// const navMenu = document.querySelector("navMenu");

// Año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Última modificación
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;




document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // 🔑 si no existe, salir sin error
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.textContent = isOpen ? '✖' : '☰';
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.textContent = '☰';
    });
  });

});

