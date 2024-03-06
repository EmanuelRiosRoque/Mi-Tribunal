// Obtener referencias a los elementos del DOM
const btnNuevoAsunto = document.getElementById("btnNuevoAsunto");

if (btnNuevoAsunto) {
  const btnNuevaPromocion = document.getElementById("btnNuevaPromocion");
  const modalNuevoAsunto = document.getElementById("modalNuevoAsunto");
  const modalNuevaPromocion = document.getElementById("modalNuevaPromocion");
  const btnCerrarModalAsunto = document.getElementById("btnCerrarModalAsunto");
  const btnCerrarModalPromocion = document.getElementById(
    "btnCerrarModalPromocion"
  );

  // Asignar eventos de clic a los botones para abrir los modales
  btnNuevoAsunto.addEventListener("click", () => {
    modalNuevoAsunto.classList.remove("hidden");
  });

  btnNuevaPromocion.addEventListener("click", () => {
    modalNuevaPromocion.classList.remove("hidden");
  });

  // Asignar eventos de clic a los botones para cerrar los modales
  btnCerrarModalAsunto.addEventListener("click", () => {
    modalNuevoAsunto.classList.add("hidden");
  });

  btnCerrarModalPromocion.addEventListener("click", () => {
    modalNuevaPromocion.classList.add("hidden");
  });
}






// Funciones para mostrar y ocultar modales

