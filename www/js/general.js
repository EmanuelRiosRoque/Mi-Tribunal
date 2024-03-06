const list = document.querySelectorAll(".list");

if (list) {
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));


    const btnOficialia   = document.querySelector("#oficialia");
    const btnExpedientes = document.querySelector("#expedientes");
    const btnCitas       = document.querySelector("#citas");
    const btnAudiencias  = document.querySelector("#audiencias");
    const btnServicios   = document.querySelector("#servicios");
    const btnNotificaciones = document.querySelector("#notificaciones");
    const btnDespacho       = document.querySelector("#despacho");
    const btnInicio         = document.querySelector("#inicio");

    btnOficialia     .addEventListener("click", cambiarVista);
    btnExpedientes   .addEventListener("click", cambiarVista);
    btnCitas         .addEventListener("click", cambiarVista);
    btnAudiencias    .addEventListener("click", cambiarVista);
    btnServicios     .addEventListener("click", cambiarVista);
    btnNotificaciones.addEventListener("click", cambiarVista);
    btnDespacho      .addEventListener("click", cambiarVista);
    btnInicio        .addEventListener("click", cambiarVista);
}

function cambiarVista(e) {
    const vista = e.target.closest('a').id;
    console.log(vista);

    if (vista === "inicio") {
      setTimeout(() => {
        window.location.href = 'inicio.html';
      }, 350);
   }

    if (vista === "oficialia") {
      setTimeout(() => {
        window.location.href = 'citas.html';
      }, 350);
   }

   if (vista === "expedientes") {
      setTimeout(() => {
        window.location.href = 'expedientes.html';
      }, 350);
   }

   if (vista === "citas") {
    setTimeout(() => {
        window.location.href = 'cita.html';
      }, 350);
    }


   if (vista === "audiencias") {
    setTimeout(() => {
        window.location.href = 'audiencias.html';
      }, 350);
    }

    if (vista === "servicios") {
    setTimeout(() => {
        window.location.href = 'servicios.html';
      }, 350);
    }


    if (vista === "notificaciones") {
    setTimeout(() => {
        window.location.href = 'notificaciones.html';
      }, 350);
    }

    if (vista === "despacho") {
    setTimeout(() => {
        window.location.href = 'despacho.html';
      }, 350);
    }

   
}


document.addEventListener('DOMContentLoaded', function () {
  // Crear el elemento de icono
  var iconoNotificaciones = document.createElement('ion-icon');
  iconoNotificaciones.setAttribute('name', 'notifications-outline');

  // Establecer estilos para el icono
  iconoNotificaciones.style.position = 'fixed';
  iconoNotificaciones.style.top = '10px';
  iconoNotificaciones.style.right = '10px';
  iconoNotificaciones.style.fontSize = '24px';
  iconoNotificaciones.style.cursor = 'pointer';
  iconoNotificaciones.classList.add('text-white');

  // Crear el elemento de indicador de notificación
  var indicadorNotificacion = document.createElement('div');
  indicadorNotificacion.style.position = 'fixed';
  indicadorNotificacion.style.top = '10px';
  indicadorNotificacion.style.right = '10px';
  indicadorNotificacion.style.width = '12px';
  indicadorNotificacion.style.height = '12px';
  indicadorNotificacion.style.background = 'red';
  indicadorNotificacion.style.borderRadius = '50%';
  indicadorNotificacion.id = "indicador";
  indicadorNotificacion.style.display ="none";

  // Agregar el icono y el indicador al cuerpo del documento
  document.body.appendChild(iconoNotificaciones);
  document.body.appendChild(indicadorNotificacion);


    var urlActual = window.location.href;
    if (urlActual.includes("audiencias.html")) {
      indicadorNotificacion.style.display ="block";
    } 
    // Agregar un controlador de eventos de clic al icono
    iconoNotificaciones.addEventListener('click', function () {
      if (urlActual.includes("audiencias.html")) {
          indicadorNotificacion.style.display ="block";
          verNotificacion("Tienes una audiencia mañana");
          verNotificacion("Hubo cambios");
          return;
      } 
      verNotificacion();
    });
  

  // Imprimir la URL en la consola

  // Puedes realizar verificaciones adicionales, por ejemplo:
  
});

function verNotificacion(msj) {
if (!msj || msj === '') {
  mostrarNotificacion("No hay notificaciones");
  return;
}

mostrarNotificacion(msj);
}


var notificationCount = 0; // Contador para manejar la posición vertical y z-index de las notificaciones

function mostrarNotificacion(msj) {
    var notify = document.createElement('div');
    var uniqueId = 'notification-' + new Date().getTime();
    notify.id = uniqueId;
    notify.style.position = 'fixed';
    notify.style.top = (36 + notificationCount * 60) + 'px'; // Ajustar la posición vertical
    notify.style.right = '45px';
    notify.style.padding = '10px';
    notify.style.background = 'white';
    notify.style.border = '1px solid #ccc';
    notify.style.borderRadius = '5px';
    notify.style.display = 'block';
    notify.style.zIndex = 10 + notificationCount; // Ajustar el z-index
    notify.textContent = msj;

    document.body.appendChild(notify);
    
    var indicadorNotificacion = document.getElementById('indicador');

    if (indicadorNotificacion) {
      indicadorNotificacion.remove();
    }
    
    notificationCount++;

    setTimeout(() => {
        notify.remove();
        notificationCount--; // Disminuir el contador cuando se elimina una notificación
    }, 3000);
}