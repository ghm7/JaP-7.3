function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

var sumbit = document.getElementById("regBtn")
sumbit.addEventListener("click", function (event) {
event.preventDefault()

var passwords = document.querySelectorAll("input[type=password]");
var inputs = document.querySelectorAll("input");
var email = inputs[0];
var name = inputs[1];
var surname= inputs[2];
var checkbox=inputs[3];

for (var i=0; i<inputs.length; i++)
    if (inputs [i].value === "") {
    showAlertError();
    return false;
    }

if (passwords[0].value.length < 6) {
    return false
}
if (passwords[0].value !== passwords[1].value){
    return false;
}
if (!checkbox.checked){
    return false
}

})

