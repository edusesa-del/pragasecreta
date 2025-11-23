document.addEventListener('DOMContentLoaded', function() {
  // Elementos principales
  var menuToggle = document.getElementById('menu-toggle');
  var menu = document.querySelector('.menu');

  // Abrir o cerrar el menú principal en móvil
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      // Accesibilidad para lectores de pantalla
      var expanded = menu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Abrir o cerrar submenús en móvil (solo en vista móvil)
  document.querySelectorAll('.menu li.has-submenu > .menu-titulo').forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      if (window.innerWidth <= 900) {
        e.preventDefault(); // Solo en móvil, para permitir el toggle
        var parentLi = this.parentElement;
        parentLi.classList.toggle('show-submenu');
      }
    });
  });

  // Resetear estados al cambiar el tamaño de la ventana
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900 && menu) {
      menu.classList.remove('active');
      document.querySelectorAll('.show-submenu').forEach(function(li) {
        li.classList.remove('show-submenu');
      });
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
});