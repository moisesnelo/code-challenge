document.addEventListener("DOMContentLoaded", function () {

    const formularioRegistro = document.getElementById("formularioRegistro");
    const botonEnviar = document.getElementById("boton");
    const url = "https://jsonplaceholder.typicode.com/users";

    
    botonEnviar.addEventListener("click", function () {
        
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;

       
        const formData = {
            nombre_usuario: nombre,
            Apellido_usuario: apellido,
            nacimiento_usuario: fechaDeNacimiento,
        };

        
        fetch( url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Respuesta del servidor:", data);
                alert("datos enviados correctamente");
            })
            .catch((error) => {
                console.error("Error al enviar los datos:", error);
                alert("error al eviar los datos");
            });
    });
});