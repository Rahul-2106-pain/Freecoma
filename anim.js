// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Un día tan solitario", start: 14, end: 17 },
  { text: "Y es mío", start: 17 , end : 20},
  { text: "El día más solitario de mi vida ", start: 20, end: 26 },
  { text: "Un día tan solitario", start: 27 , end: 29 },
  { text: "Debería ser prohibido", start: 30 , end: 32 },
  { text: "Es un día que no puedo soportar", start: 33 , end: 39 },
  { text: "El día más solitario de mi vida", start: 40 , end: 45 },
  { text: "El día más solitario de mi vida", start: 46 , end: 51 },
  { text: "Un día tan solitario ", start: 52, end: 54 },
  { text: "No debería existir", start: 55 , end: 58 },
  { text: "Es un día que nunca voy a extrañar", start: 59 , end: 64 },
  { text: "Un día tan solitario", start: 65 , end: 68 },
  { text: "Y es mío", start: 68 , end: 71 },
  { text: "El día más solitario de mi vida", start: 72 , end: 77 },
  { text: "Y si te vas", start: 77 , end: 80 },
  { text: "Quiero ir contigo", start: 81 , end: 83 },
  { text: "Y si te mueres", start: 84 , end: 87 },
  { text: "Yo quiero morir contigo", start: 87 , end: 90 },
  { text: "Tomar tu mano e irnos lejos ♡", start: 90 ,  end: 98 },
  { text: "El día más solitario de mi vida", start: 122 , end: 127 },
  { text: "El día más solitario de mi vida", start: 128, end: 133 },
  { text: "El día más solitario de mi vida", start: 134 , end: 146 },
  { text: "Un día tan solitario", start: 146.5 , end: 150 },
  { text: "Y es mío", start: 150 , end: 153 ,},
  { text: "Es un día que me alegro de haber sobrevivido", start: 153 , end: 160 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.start && time < line.end
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
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