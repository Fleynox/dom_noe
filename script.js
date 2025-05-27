//modifica el contenido 
document.getElementById("titulo").innerText = "Nuevo título";
document.getElementById("enlace").href = "https://openai.com";

// esta parte hace la manipulación de estilos
let caja = document.getElementById("caja");
caja.style.backgroundColor = "blue";
caja.style.border = "2px solid black";

// este parte crea un nuevo elemento
let nuevo = document.createElement("h2");
nuevo.innerText = "Hola mundo";
document.body.appendChild(nuevo);

//esta parte elimila los elementos
document.getElementById("caja").remove();