document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los botones con la clase 'equipoBtn'
    var equipoBtns = document.querySelectorAll('.equipoBtn');
  
    // Obtener el modal y el botón de cerrar
    var equipoModal = document.getElementById('equipoModal');
    var btnCerrarEquipoModal = document.getElementById('btnCerrarEquipoModal');
  
    // Agregar eventos de clic a cada botón
    equipoBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Mostrar el modal cuando se hace clic en un botón
        equipoModal.classList.remove('hidden');
      });
    });
  
    // Agregar evento de clic al botón de cerrar modal
    btnCerrarEquipoModal.addEventListener('click', function () {
      // Cerrar el modal al hacer clic en el botón de cerrar
      equipoModal.classList.add('hidden');
    });
  });
  