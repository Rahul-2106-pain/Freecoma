// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Quiero escuchar tu voz , poder abrazarte", time: 17 },
  { text: "Porque esta noche te entregare mi corazon  ", time: 22 },
  { text: "Y al amanecer , poder tocarte  ", time: 27 },
  { text: "Y darme cuenta que no fue un sueño estar contigo ", time: 32 },
  { text: "Despierta, que ya salió el Sol, mi amor", time: 57 },
  { text: "Hoy mi vida ya cambio , tú eres la dueña de mi corazón", time: 61 },
  { text: "Mi vida, yo te cuidaré toda la vida", time: 65 },
  { text: "Solamente dejame estar contigo", time: 71 },
  { text: "Despierta , que ya salio el sol , mi amor ", time: 95 },
  { text: "Hoy mi vida ya cambio , tu eres la dueña de mi corazon", time: 99 },
  { text: "Mi vida , yo te cuidare toda la vida ", time: 105 },
  { text: "Solamente dejame estar contigo", time: 109 },
  { text: "Quiero escuchar tu voz , poder abrazarte", time: 132 },
  { text: "Porque esta noche te entregare mi corazon ", time: 138 },
  { text: "Y al amanecer , poder tocarte", time: 141 },
  { text: "Y darme cuenta que no fue un sueño estar contigo", time: 148 },
  { text: "Despierta, que ya salió el Sol, mi amor", time: 172 },
  { text: "Hoy mi vida ya cambio , tú eres la dueña de mi corazón", time: 176 },
  { text: "Mi vida, yo te cuidaré toda la vida", time: 181 },
  { text: "Solamente dejame estar contigo", time: 186 },
  { text: "Despierta, que ya salió el Sol, mi amor", time: 191 },
  { text: "Hoy mi vida ya cambio , tú eres la dueña de mi corazón", time: 195 },
  { text: "Mi vida, yo te cuidaré toda la vida", time: 200 },
  { text: "Solamente dejame estar contigo", time: 205 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);