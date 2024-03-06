const btnForm = document.querySelector("#loginForm");
const btnFormRe = document.querySelector("#registerForm");
const ingresarBtn = document.querySelector("#ingresarBtn");
const registrarBtn = document.querySelector("#registrarBtn");
const btnBack = document.querySelector("#btnBack");

// Listenners
if (ingresarBtn || registrarBtn) {
    document.getElementById("ingresarBtn").addEventListener("click", function(e) {
        e.preventDefault();
    
        // Oculta los botones con una transición de opacidad
        document.getElementById("ingresarBtn").classList.add("opacity-0");
        document.getElementById("registrarBtn").classList.add("opacity-0");
    
        // Muestra el botón de retroceso
        document.getElementById("btnBack").classList.remove("opacity-0");
        document.getElementById("btnBack").classList.remove("hidden");
    
        // Espera a que termine la animación y luego oculta completamente los botones
        setTimeout(function() {
            document.getElementById("ingresarBtn").style.display = "none";
            document.getElementById("registrarBtn").style.display = "none";
        }, 300); // Ajusta el tiempo según la duración de la transición
    
        // Muestra el formulario de login después de que los botones estén completamente ocultos
        setTimeout(function() {
            document.getElementById("cont-form").classList.remove("hidden");
        }, 300);
    });
    
    document.getElementById("registrarBtn").addEventListener("click", function(e) {
        e.preventDefault();
    
        // Oculta los botones con una transición de opacidad
        document.getElementById("ingresarBtn").classList.add("opacity-0");
        document.getElementById("registrarBtn").classList.add("opacity-0");
    
        // Muestra el botón de retroceso
        document.getElementById("btnBack").classList.remove("opacity-0");
        document.getElementById("btnBack").classList.remove("hidden");
    
        // Espera a que termine la animación y luego oculta completamente los botones
        setTimeout(function() {
            document.getElementById("ingresarBtn").style.display = "none";
            document.getElementById("registrarBtn").style.display = "none";
        }, 300); // Ajusta el tiempo según la duración de la transición
    
        // Muestra el formulario de login después de que los botones estén completamente ocultos
        setTimeout(function() {
            document.getElementById("cont-form-register").classList.remove("hidden");
            document.getElementById("contenedor").classList.remove("py-28");
            document.getElementById("contenedor").classList.add("py-18");
    
        }, 300);
    });
    
    document.getElementById("btnBack").addEventListener("click", function(e) {
        e.preventDefault();
    
        // Oculta el botón de retroceso con una transición de opacidad
        document.getElementById("btnBack").classList.add("opacity-0");
    
        // Espera a que termine la animación y luego oculta completamente el botón de retroceso
        setTimeout(function() {
            document.getElementById("btnBack").classList.add("hidden");
        }, 300); // Ajusta el tiempo según la duración de la transición
    
        // Muestra los botones después de que el botón de retroceso esté completamente oculto
        setTimeout(function() {
            document.getElementById("ingresarBtn").classList.remove("opacity-0");
            document.getElementById("contenedor").classList.add("py-28");
            document.getElementById("registrarBtn").classList.remove("opacity-0");
            document.getElementById("ingresarBtn").style.display = "block";
            document.getElementById("registrarBtn").style.display = "block";
            document.getElementById("cont-form").classList.add("hidden");
            document.getElementById("cont-form-register").classList.add("hidden");
        }, 300);
    });
    
    btnForm.addEventListener('submit', login);
    btnFormRe.addEventListener('submit', loginRe);
    
    
    // Functions
    function login(e) {
        e.preventDefault()
        // Valores inputs
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
    
        if (username === '' === '' || password === '') {
            mostrarAlerta('Ambos campos son obligatorios', btnForm)
            return;
        }
        
        // Funcion para validar y redirigir al usuario
    
    
        // Pasa validacion
        window.location.href = 'inicio.html';
    
    }
    
    function loginRe(e) {
        e.preventDefault()
        const cedula = document.querySelector('#cedula').value;
        const correo = document.querySelector('#correo').value;
        const celular = document.querySelector('#celular').value;
        const passwordRegister = document.querySelector('#passwordRegister').value;
        const confirmPassword = document.querySelector('#confirmPassword').value;
    
        if (cedula === '' || correo === '' || celular === '' || passwordRegister === '' || confirmPassword === '') {
            mostrarAlerta("Todos los campos son obligatorios", btnFormRe);
            return;
        }
    
        const correoValido = validarFormatoCorreo(correo);
        if (!correoValido) {
            mostrarAlerta("El correo no cumple con el formato esperado", btnFormRe);
            return;
        }
    
        if (passwordRegister.length < 8 || confirmPassword.length < 8) {
            mostrarAlerta("La contraseña debe tener al menos 8 caracteres", btnFormRe);
            return;
        }
    
        if (passwordRegister != confirmPassword) {
            mostrarAlerta("Las contraseñas no coinciden", btnFormRe);
            return;
        }   
    
    
        // Funcion para validar y guardar nuevo usuario
    }
    
    function mostrarAlerta(msj, place) {
        const existeAlerta = document.querySelector('.bg-red-100');
    
        if(!existeAlerta) {
            const div = document.createElement('DIV');
            div.classList.add('bg-red-100', 'border-l-4', 'border-red-500', 'text-red-700', 'p-4', 'text-center', 'mt-5');
            div.textContent = msj
           
            place.appendChild(div)
    
            setTimeout(() => {
                div.remove();
            }, 3000);
        }
    }
    
    function validarFormatoCorreo(correo) {
        const expresionRegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegularCorreo.test(correo);
    }
    
}









