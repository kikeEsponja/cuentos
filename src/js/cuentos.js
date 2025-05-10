// Obtener parámetro "cuento" de la URL
const params = new URLSearchParams(window.location.search);
const nombreCuento = params.get("cuento");

if (nombreCuento) {
  fetch(`/src/docs/${nombreCuento}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("contenido-cuento").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("contenido-cuento").innerHTML =
        "<p>Lo siento, no se pudo cargar el cuento.</p>";
    });
} else {
  document.getElementById("contenido-cuento").innerHTML =
    "<p>No se ha seleccionado ningún cuento.</p>";
}

const volver = document.getElementById("volver");
volver.addEventListener("click", () => {
  window.history.back()
});