window.addEventListener("load",function(){
    //AQUI VA TODO EL CODIGO QUE SE EJECUTA DESPUES DE CARGAR LA PAGINA

    formulario=this.document.getElementById("formulario");
    formulario.addEventListener("submit", function (){
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("pwd").value;
        let respuesta = document.getElementById("result");
        //alert("El nombre es " + nombre + " con contraseña " + pass);
        if (nombre == "G7S21" && pass == "si se puede"){
            respuesta.innerText="Se acepto el ingreso a el sistema..."
            respuesta.style.color="blue";
            respuesta.style.fontSize="3em";
            respuesta.style.width="350px";
            respuesta.style.height="130px";
            respuesta.style.backgroundColor="White";
        }else{
            respuesta.innerText="Estas mal de tu cabeza..."
            respuesta.style.color="red";
            respuesta.style.fontSize="2em";
            respuesta.style.width="500px";
            respuesta.style.height="150px";
            respuesta.style.backgroundColor="cyan";
        }
    });
})