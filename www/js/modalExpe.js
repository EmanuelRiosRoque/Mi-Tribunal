const btnExpediente = document.querySelectorAll(".btn-expediente");
if (btnExpediente) {
  document.querySelectorAll(".btn-expediente").forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Actualizar el contenido del modal según el botón que se haya hecho clic
      var expedienteId = btn.id;

      // Actualizar el contenido del modal con la información específica del expediente
      // document.getElementById("modalContent").innerHTML = expedienteInfo;

      // Mostrar el modal
      document.getElementById("modalExpediente").classList.remove("hidden");
    });
  });
  // Evento clic para cerrar el Modal de Expediente
  document
    .getElementById("btnCerrarModalExpediente")
    .addEventListener("click", function () {
      // Cerrar el modal
      document.getElementById("modalExpediente").classList.add("hidden");
    });

  // Evento clic para abrir el Modal de Nuevo Expediente
  // Evento clic para abrir el Modal de Nuevo Expediente
  document
    .getElementById("nuevoExpediente")
    .addEventListener("click", function () {
      // Mostrar el modal
      document
        .getElementById("modalNuevoExpediente")
        .classList.remove("hidden");
    });

  // Evento clic para cerrar el Modal de Nuevo Expediente
  document
    .getElementById("btnCerrarModalNuevoExpediente")
    .addEventListener("click", function () {
      // Cerrar el modal
      document.getElementById("modalNuevoExpediente").classList.add("hidden");
    });

  // Evento clic para guardar el Nuevo Expediente (aquí debes agregar tu lógica de guardar)
  document
    .getElementById("btnGuardarNuevoExpediente")
    .addEventListener("click", function () {
      // Aquí debes agregar tu lógica para guardar el nuevo expediente
      // ...

      // Cerrar el modal después de guardar (puedes ajustar según tu lógica)
      document.getElementById("modalNuevoExpediente").classList.add("hidden");

      // También puedes reiniciar el formulario si es necesario
      document.getElementById("formNuevoExpediente").reset();
    });
}