// Revisar el numero favorito
const numerofavorito = document.getElementById("favnum");
const respuesta = document.getElementById("respuesta");

numerofavorito.addEventListener("input", function () {
    let numero = numerofavorito.value;

    if (numero === "") {
        respuesta.textContent = "";
    } else if (Number(numero) === 13) {
        respuesta.textContent = "¡Ese es mi número favorito!";
    } else {
        respuesta.textContent = "Ese no es, intenta otra vez.";
    }
});

// Mostrar lo que me gusta
const gustos = document.getElementById("gustos");
const resultado = document.getElementById("resultado");
const imagen = document.getElementById("imagen");

gustos.addEventListener("change", function () {
    let gusto = gustos.value;

    if (gusto === "futbol") {
        resultado.textContent = "Me gusta jugar fútbol.";
        imagen.src = "img/futbol.svg";
        imagen.style.display = "block";
    } else if (gusto === "leer") {
        resultado.textContent = "Me gusta leer.";
        imagen.src = "img/leer.svg";
        imagen.style.display = "block";
    } else if (gusto === "viajar") {
        resultado.textContent = "Me gusta viajar.";
        imagen.src = "img/viajar.svg";
        imagen.style.display = "block";
    } else {
        resultado.textContent = "";
        imagen.style.display = "none";
        imagen.removeAttribute("src");
    }
});

// Mensaje del boton
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    alert("¡Buen trabajo! Seguir aprendiendo es lo importante.");
});
