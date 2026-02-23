// Event listener para el envío del formulario
document.getElementById('registroF').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Limpiador de errores de antes
    clearErrors();

    let isValid = true;

    // Valida el nombre
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre.length < 2) {
        showError('alerta-NO', 'El nombre debe tener al menos 2 caracteres.');
        isValid = false;
    }

    // Valida el email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('alerta-EM', 'Introduce un correo electrónico válido.');
        isValid = false;
    }

    // Valida el teléfono
    const telefono = document.getElementById('telefono').value.trim();
    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(telefono)) {
        showError('alerta-T', 'El teléfono debe tener exactamente 9 dígitos.');
        isValid = false;
    }

    // Valida la fecha
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    if (fechaNacimiento) {
        const fecha = new Date(fechaNacimiento);
        const hoy = new Date();
        const edadMinima = 16;
        const fechaMinima = new Date(hoy.getFullYear() - edadMinima, hoy.getMonth(), hoy.getDate());
        const fechaMaxima = new Date(1900, 0, 1);
        if (fecha > fechaMinima) {
            showError('alerta-F', 'Debes tener al menos 16 años.');
            isValid = false;
        } else if (fecha < fechaMaxima) {
            showError('alerta-F', 'La fecha de nacimiento no es válida.');
            isValid = false;
        }
    } else {
        showError('alerta-F', 'Selecciona tu fecha de nacimiento.');
        isValid = false;
    }

    // Valida el genero
    const genero = document.getElementById('genero').value;
    if (!genero) {
        showError('alerta-G', 'Selecciona tu género.');
        isValid = false;
    }

    // Valida la experiencia (select)
    const experiencia = document.getElementById('experiencia').value;
    if (!experiencia) {
        showError('alerta-E', 'Selecciona tu nivel de experiencia.');
        isValid = false;
    }

    // Mensaje extra , por si quieres decir algo mas

    if (isValid) {
        
        document.getElementById('exit').textContent = 'Registro enviado , pronto me limpiaras los pies :)';
        document.getElementById('exit').style.display = 'block';
        
    }
});

// Funcion para los errores
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Funcion para limpiar errores
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    document.getElementById('exit').style.display = 'none';
}