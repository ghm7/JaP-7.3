function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Anulamos la acción por default del evento
function validation(event) {
    event.preventDefault()

// Creamos variables con nombres más sencillos para acceder a los inputs
var passwords = document.querySelectorAll("input[type=password]");
var inputs = document.querySelectorAll("input");
var email = inputs[0];
var name = inputs[1];
var surname= inputs[2];
var checkbox=inputs[5];

// Checkeo de campos no vacíos
for (var i=0; i<inputs.length; i++)
    if (inputs [i].value === "") {
    return false;
    }

// Checkeo contraseña y repetir contraseña
if (passwords[0].value.length < 6) {
    return false
}

// Verificamos que las contraseñas estén iguales
if (passwords[0].value !== passwords[1].value){
    return false;
}

//Verifica si el tick está puesto
if (!checkbox.checked){
    return false
}
return true
}

// Botoncito para que no se envíe el formulario
var sumbit = document.getElementById("regBtn")
sumbit.addEventListener("click", function (event) {
if (!validation(event)) {
    showAlertError();
    return
}

showAlertSuccess()
})