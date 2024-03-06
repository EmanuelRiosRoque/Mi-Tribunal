const nuevaCita = document.querySelectorAll("#nuevaCita");
if (nuevaCita) {
  function mostrarModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
}

function cerrarModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
}

// Event listeners para cada botón que abrirá su respectivo modal
document.getElementById('nuevaCita').addEventListener('click', function() {
  mostrarModal('modalNuevaCita');
});

document.getElementById('misCitas').addEventListener('click', function() {
  mostrarModal('modalMisCitas');
});

document.getElementById('solicitudCitas').addEventListener('click', function() {
  mostrarModal('modalSolicitudCita');
});

// Event listeners para los botones de cerrar en cada modal
document.getElementById('btnCerrarModalNuevaCita').addEventListener('click', function() {
  cerrarModal('modalNuevaCita');
});

document.getElementById('btnCerrarModalMisCitas').addEventListener('click', function() {
  cerrarModal('modalMisCitas');
});

document.getElementById('btnCerrarModalSolicitudCita').addEventListener('click', function() {
  cerrarModal('modalSolicitudCita');
});
}


document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los botones "Editar"
    var btnsEditar = document.querySelectorAll('#btnEditar');

    // Obtener el modal de edición
    var modalEditarCita = document.querySelector('#modalEditarCita');

    // Obtener el botón para cerrar el modal de edición
    var btnCerrarModalEditarCita = document.querySelector('#btnCerrarModalEditarCita');

    // Agregar un evento a cada botón "Editar" para mostrar el modal de edición
    btnsEditar.forEach(function (btnEditar) {
      btnEditar.addEventListener('click', function () {
        modalEditarCita.classList.remove('hidden');
      });
    });

    // Agregar un evento al botón para cerrar el modal de edición
    btnCerrarModalEditarCita.addEventListener('click', function () {
      modalEditarCita.classList.add('hidden');
    });
  });