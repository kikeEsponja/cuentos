
const volver = document.getElementById("volver");
volver.addEventListener("click", () => {
  window.history.back();
});

const params = new URLSearchParams(window.location.search);
const nombre = params.get("cuento");

        // Diccionario para mostrar títulos bonitos
        const titulos = {
          "revolucion": "Nunca hubo una revolución",
          "en_silencio": "En silencio",
          "encuentro_cercano": "Encuentro cercano",
          "la_prueba": "La Prueba"
        // Puedes agregar más: "nombre-del-archivo": "Título Bonito"
      };

      const titulo = titulos[nombre] || "Cuento desconocido";
  
      // Actualizar título y encabezado
      document.title = `${titulo} - Mesa de lectura`;
      document.getElementById("titulo").textContent = titulo;
  

if(nombre){
  const visor = document.getElementById("visor");
  visor.innerHTML = `<iframe src="../docs/${nombre}.pdf" type="application/pdf" class="visor"></iframe>`;
}else{
  document.getElementById("visor").innerHTML = "<p>No se ha seleccionado ningún cuento.</p>";
}