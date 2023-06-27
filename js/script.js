//Eventos de los input y texarea
const datos = {
    nombre: '',
    email: '',
    mensaje: '',
    formulario: ''
}
    
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

function leerInput(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

nombre.addEventListener('input', leerInput);
email.addEventListener('input', leerInput);
mensaje.addEventListener('input', leerInput);


//El evento del submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; //Corta el codigo y no se ejecuta las siguiente linea.

    }

    //Crear alerta de enviar corremente
    mostrarAlerta('Mensaje enviado correctamente');
});


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('enviado');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}



