//code here

let enviar = document.querySelector("#registrarse");
let baseUsuarios = new Array();

const limpiarCampos = () =>{
    document.querySelector("#nombre").value = "";
    document.querySelector("#email").value  = "";
    document.querySelector("#pwd").value = "";
}

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#pwd").value;

  let datos = {
    nombre: nombre,
    correo: email,
    clave: password,
  };


  if (datos.nombre != "" && datos.correo !="" && datos.clave !="") {
    baseUsuarios.push(datos);
    console.log(baseUsuarios);
    localStorage.setItem("datos Usuario", JSON.stringify(baseUsuarios));
    limpiarCampos();
  } else{
    alert("Por favor complete los campos!!");
  }
  

});


document.querySelector("#loguearse").addEventListener("click", () => location.href = "loggin.html");
