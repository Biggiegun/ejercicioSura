// Code here

const limpiarEntradas = () =>{
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
}

let enviar = document.querySelector("#enviar");

enviar.addEventListener("click", (e) => {
e.preventDefault();
    
let email = document.querySelector("#email");
let contrasena = document.querySelector("#password");

let registro = JSON.parse(localStorage.getItem("datos Usuario"));

registro.forEach(element => {

    if (email.value == element.correo && contrasena.value == element.clave) {
        alert("Sesión iniciada con éxito!!");
        localStorage.setItem("Datos Sesion", JSON.stringify(registro));
        location.href = "index.html";
      }
      
});

limpiarEntradas();
});
