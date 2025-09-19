// Sincronizar las letras con la canción
var audio = document.getElementById("player");
// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var songs = [
  {
    src: "sound/Cant take my eyes off u.mp3",
    lyrics: [
  { text: "Eres demasiado bueno para ser verdad", start: 15, end: 19 },
  { text: "No puedo quitar mis ojos de ti", start: 19 , end : 23},
  { text: "Serías como el cielo tocar", start: 23, end: 27 },//
  { text: "Quiero abrazarte tanto", start: 27 , end: 31 },
  { text: "Por fin ha llegado el amor a mi vida", start: 31 , end: 35 },
  { text: "Y le agradezco a Dios que estoy vivo", start: 35 , end: 39 },
  { text: "Eres demasiado bueno para ser verdad", start: 39 , end: 43 },//primero
  { text: "No puedo quitar mis ojos de ti", start: 43 , end: 46 },
  { text: "Perdón por la forma en que te miro", start: 47, end: 51 },
  { text: "No hay nada más para comparar", start: 51 , end: 55 },
  { text: "Mirarte, me deja débil", start: 55 , end: 59 },
  { text: "No quedan palabras para hablar", start: 59 , end: 63 },
  { text: "Pero si te sientes como yo me siento", start: 63 , end: 66 },
  { text: "Por favor, hazme saber que es real", start: 67 , end: 70 },
  { text: "Eres demasiado bueno para ser verdad", start: 70 , end: 74 },
  { text: "No puedo quitar mis ojos de ti", start: 74 , end: 78 },
  { text: "I love u, baby", start: 96 , end: 98 },
  { text: "Y si todo esta bien ", start: 98 , end: 100 },
  { text: "I need u, baby", start: 100 ,  end: 102 },
  { text: "Para calentar las noches solitarias", start: 102 , end: 104 },
  { text: "I love u, baby", start: 104, end: 107 },//
  { text: "Confía en mí cuando lo digo", start: 107 , end: 111 },
  { text: "Oh, pretty baby", start: 111 , end: 114 },
  { text: "No me derribes tan pronto", start: 114 , end: 116 ,},
  { text: "Oh, pretty baby", start: 116 , end: 118 },
  { text: "Ahora que te he encontrado, quédate", start: 118 , end: 120 },
  { text: "Y déjame amarte cariño", start: 120 , end: 123 },
  { text: "Déjame amarte", start: 123 , end: 126 },
  { text: "Eres demasiado bueno para ser verdad", start: 127, end: 131 },
  { text: "No puedo quitar mis ojos de ti", start: 131 , end : 135},
  { text: "Serías como el cielo tocar", start: 135, end: 139 },
  { text: "Quiero abrazarte tanto", start: 139 , end: 143 },//
  { text: "Por fin ha llegado el amor a mi vida", start: 143 , end: 147 },
  { text: "Y le agradezco a Dios que estoy vivo", start: 147 , end: 151 },
  { text: "Eres demasiado bueno para ser verdad", start: 151 , end: 154 },
  { text: "No puedo quitar mis ojos de ti", start: 155 , end: 159 },
  { text: "I love u, baby", start: 168 , end: 171 },
  { text: "Y si todo esta bien ", start: 171 , end: 173 },
  { text: "I need u baby", start: 173 ,  end: 175 },
  { text: "Para calentar las noches solitarias", start: 175 , end: 177 },
  { text: "I love u baby", start: 177, end: 179 },
  { text: "Confía en mí cuando lo digo", start: 179 , end: 184 },
  { text: "Oh, pretty baby", start: 184 , end: 187 },//////////
  { text: "No me derribes tan pronto", start: 187 , end: 189 },
  { text: "Oh, pretty baby", start: 189 , end: 191 },
  { text: "Ahora que te he encontrado, quédate", start: 191 , end: 193 },
  { text: "Oh, pretty baby", start: 193 , end: 195 },
  { text: "Confía en mí cuando lo digo", start: 195 , end: 199},///////////
  { text: "I need u, baby", start: 199 ,  end: 202 },
  { text: "Bueno, ¿no vendrás conmigo?", start: 202 , end: 204 },
  { text: "Oh, pretty baby", start: 204, end: 206 },
  { text: "Ahora que te he encontrado, quédate", start: 206 , end: 208 },
  { text: "Y déjame amarte cariño", start: 208 , end: 212 },
  { text: "Déjame amarte", start: 212 , end: 218 ,}
    ]
},
  {
    src: "sound/LonelyDay.mp3",
    lyrics : [
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
]
  },
  {
    src : "sound/Its been a long , long time.mp3",
    lyrics: [
  { text: "Nunca pensé que estarías", start: 6, end: 9 },
  { text: "De pie aquí tan cerca de mí", start: 9 , end : 12},
  { text: "Hay tanto que siento que debería decir", start: 12, end: 16 },
  { text: "Pero las palabras pueden esperar hasta otro día", start: 18 , end: 26 },
  { text: "Bésame una vez , bésame dos veces ", start: 30 , end: 33 },
  { text: "Bésame una vez más", start: 33 , end: 35 },
  { text: "Ha pasado mucho, mucho tiempo", start: 35 , end: 41 },//primero revisar
  { text: "No me he sentido así, querida", start: 42, end: 45 },
  { text: "Como no recuerdo cuando", start: 45 , end: 48 },
  { text: "Ha pasado mucho, mucho tiempo", start: 48 , end: 53 },
  { text: "Nunca sabrás", start: 54 , end: 55 },
  { text: "Cuantos sueños he soñado contigo", start: 55 , end: 59 },
  { text: "O lo vacío que parecía todo sin ti", start: 60 , end: 66 },
  { text: "Así que, bésame una vez", start: 66 , end: 68 },//
  { text: "Bésame dos veces, bésame una vez más", start: 68 , end: 72 },//
  { text: "Ha pasado mucho, mucho tiempo", start: 72 , end: 77 },//
  { text: " ❤ ", start :73 , end : 115 },
  { text: "Así que, bésame una vez", start: 116 ,  end: 118 },
  { text: "Bésame dos veces, bésame una vez más", start: 118 , end: 122 },
  { text: "Ha pasado mucho, mucho tiempo", start: 122 , end: 127 },
  { text: "Ha pasado mucho, mucho tiempo", start: 128 , end: 135 },
    ]
  }
];
var currentSongIndex = 0;
var lyricsData = songs[currentSongIndex].lyrics;

// Cuando termina la canción, pasa a la siguiente
audio.addEventListener("ended", function () {
  if (currentSongIndex < songs.length - 1) {
    currentSongIndex++;
    audio.src = songs[currentSongIndex].src;
    lyricsData = songs[currentSongIndex].lyrics;
    audio.play();
  }
});

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