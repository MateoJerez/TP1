let usuarioGuardado = "mateo";
let contraseñaGuardada = "2007";

let usuarioIngresado = prompt("Ingrese su usuario:");
let contraseñaIngresada = prompt("Ingrese su contraseña:");

if (usuarioIngresado === usuarioGuardado && contraseñaIngresada === contraseñaGuardada) {
    alert("Acceso autorizado");
} else {
    alert("Acceso denegado");
}