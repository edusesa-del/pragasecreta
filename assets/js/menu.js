const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Selecciona cualquier elemento que sea hijo directo de un li.has-submenu,
// tanto si es un <a> como un <span class="menu-titulo">
const menuTriggers = document.querySelectorAll('.menu li.has-submenu > a, .menu li.has-submenu > .menu-titulo');

// Abrir o cerrar el menú principal en móvil
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// Abrir o cerrar submenús en móvil
menuTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault(); // Evita navegar si es <a>
      const parentLi = trigger.parentElement;
      parentLi.classList.toggle('show-submenu');
    }
  });
});

// Resetear estados al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    // Oculta menú principal
    menu.classList.remove('active');
    // Cierra cualquier submenú abierto
    document.querySelectorAll('.show-submenu').forEach(li => li.classList.remove('show-submenu'));
  }
});
