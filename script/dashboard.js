// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar el estado del modo oscuro en el localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }
});

// Cerrar Sesión con confirmación
document.getElementById("logoutButton").addEventListener("click", () => {
  const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmation) {
    window.location.href = "index.html";
  }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Oculta todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Muestra la sección seleccionada
    document.getElementById(targetId).classList.add("active");

    // Marca el enlace como activo
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
  // Recuperar la fecha de aniversario desde el localStorage
  const anniversaryDate = localStorage.getItem("anniversaryDate");

  if (anniversaryDate) {
    const anniversary = new Date(anniversaryDate);
    const today = new Date();

    // Calcular la diferencia en años, meses y días
    let years = today.getFullYear() - anniversary.getFullYear();
    let months = today.getMonth() - anniversary.getMonth();
    let days = today.getDate() - anniversary.getDate();

    // Si el mes actual es anterior al mes de aniversario, restamos 1 año
    if (months < 0) {
      years--;
      months += 12; // Ajustamos los meses a 12 si restamos un año
    }

    // Si el día actual es anterior al día de aniversario, restamos 1 mes
    if (days < 0) {
      months--;
      // Ajustamos los días al último día del mes anterior
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Función para manejar singular o plural
    const yearText = years === 1 ? "año" : "años";
    const monthText = months === 1 ? "mes" : "meses";
    const dayText = days === 1 ? "día" : "días";

    // Mostrar el número de años, meses y días en el dashboard
    document.getElementById(
      "daysCount"
    ).innerText = `Ya han pasado mucho tiempo, desde que comenzó nuestra historia de amor. Me alegra mucho estar aún a tu lado y disfrutar cada momento, eres la persona que amaré de por vida. ¡Te Amoo❤️!`;
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // Número de partículas (corazones)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "https://img.icons8.com/?size=100&id=12306&format=png&color=000000", // Aquí puedes usar cualquier imagen de corazón
        width: 2,
        height: 2,
      },
    },
    move: {
      enable: true,
      speed: 1, // Velocidad de caída
      direction: "top", // Dirección hacia abajo
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});

    const mensajes = [
      "1. Tu sonrisa ilumina mi día.",
      "2. Tu voz es música para mis oídos.",
      "3. Me haces reír cuando necesito sonreír.",
      "4. Eres mi refugio en momentos difíciles.",
      "5. Me apoyas en mis sueños.",
      "6. Tu amor es mi motivación.",
      "7. Me haces sentir vivo.",
      "8. Eres mi mejor amiga.",
      "9. Me comprendes como nadie.",
      "10. Me haces sentir especial.",
      "11. Tu belleza interior es impresionante.",
      "12. Eres inteligente y sabia.",
      "13. Me enseñas nuevas cosas cada día.",
      "14. Tu pasión es contagiosa.",
      "15. Me haces sentir orgulloso.",
      "16. Eres mi compañera de aventuras.",
      "17. Me haces sentir en casa.",
      "18. Tu amor es mi hogar.",
      "19. Eres mi confidente.",
      "20. Me haces sentir seguro.",
      "21. Tu sonrisa es mi felicidad.",
      "22. Me haces sentir vivo.",
      "23. Eres mi razón de ser.",
      "24. Me haces sentir completo.",
      "25. Tu amor es mi vida.",
      "26. Eres mi todo.",
      "27. Me haces sentir amado.",
      "28. Tu voz es mi consuelo.",
      "29. Me haces sentir protegido.",
      "30. Eres mi ángel guardián.",
      "31. Me haces sentir valorado.",
      "32. Tu amor es mi tesoro.",
      "33. Eres mi mejor amiga.",
      "34. Me haces sentir respetado.",
      "35. Tu sonrisa es mi alegría.",
      "36. Me haces sentir conectado.",
      "37. Eres mi alma gemela.",
      "38. Me haces sentir unido.",
      "39. Tu amor es mi unión.",
      "40. Eres mi compañera de vida.",
      "41. Me haces sentir realizado.",
      "42. Tu sonrisa es mi logro.",
      "43. Me haces sentir satisfecho.",
      "44. Eres mi razón de vivir.",
      "45. Me haces sentir vivo.",
      "46. Tu amor es mi energía.",
      "47. Eres mi motivación.",
      "48. Me haces sentir entusiasmado.",
      "49. Tu sonrisa es mi inspiración.",
      "50. Me haces sentir creativo.",
      "51. Eres mi musa.",
      "52. Me haces sentir artístico.",
      "53. Tu amor es mi obra maestra.",
      "54. Eres mi modelo a seguir.",
      "55. Me haces sentir seguro.",
      "56. Tu voz es mi guía.",
      "57. Me haces sentir protegido.",
      "58. Eres mi escudo.",
      "59. Me haces sentir valorado.",
      "60. Tu amor es mi recompensa.",
      "61. Eres mi premio.",
      "62. Me haces sentir afortunado.",
      "63. Tu sonrisa es mi suerte.",
      "64. Me haces sentir bendecido.",
      "65. Eres mi ángel.",
      "66. Me haces sentir en paz.",
      "67. Tu amor es mi tranquilidad.",
      "68. Eres mi refugio.",
      "69. Me haces sentir seguro.",
      "70. Tu voz es mi consuelo.",
      "71. Me haces sentir protegido.",
      "72. Eres mi protector.",
      "73. Me haces sentir valorado.",
      "74. Tu amor es mi tesoro.",
      "75. Eres mi joya.",
      "76. Me haces sentir especial.",
      "77. Tu sonrisa es mi regalo.",
      "78. Me haces sentir agradecido.",
      "79. Eres mi bendición.",
      "80. Me haces sentir vivo.",
      "81. Tu amor es mi vida.",
      "82. Eres mi todo.",
      "83. Me haces sentir completo.",
      "84. Tu sonrisa es mi felicidad.",
      "85. Me haces sentir realizado.",
      "86. Eres mi logro.",
      "87. Me haces sentir satisfecho.",
      "88. Tu amor es mi recompensa.",
      "89. Eres mi premio.",
      "90. Me haces sentir afortunado.",
      "91. Tu sonrisa es mi suerte.",
      "92. Me haces sentir bendecido.",
      "93. Eres mi ángel.",
      "94. Me haces sentir en paz.",
      "95. Tu amor es mi tranquilidad.",
      "96. Eres mi refugio.",
      "97. Me haces sentir seguro.",
      "98. Tu voz es mi consuelo.",
      "99. Me haces sentir protegido.",
      "100. Eres mi protector.",
      "121. Me haces ver el mundo con amor.",
      "122. Eres mi mejor decisión.",
      "123. Tu presencia me llena de alegría.",
      "124. Me das razones para sonreír.",
      "125. Eres el mejor capítulo de mi vida.",
      "126. Me llenas de inspiración.",
      "127. Eres mi paz en el caos.",
      "128. Tu amor me da confianza.",
      "129. Me haces ver lo bueno de la vida.",
      "130. Eres mi motivación diaria.",
      "131. Tu ternura es mi refugio.",
      "132. Me haces sentir que todo es posible.",
      "133. Eres mi motor.",
      "134. Tu amor me da fortaleza.",
      "135. Me haces sentir en el cielo.",
      "136. Eres mi mejor pensamiento.",
      "137. Tu mirada me llena de paz.",
      "138. Me haces amar cada instante.",
      "139. Eres mi rayo de luz.",
      "140. Tu amor es mi alegría.",
      "141. Me haces sentir invencible.",
      "142. Eres mi dulce refugio.",
      "143. Tu amor es eterno.",
      "144. Me das fuerzas para seguir adelante.",
      "145. Eres mi mejor regalo.",
      "146. Tu amor es mi bendición.",
      "147. Me haces creer en los milagros.",
      "148. Eres mi destino.",
      "149. Tu amor es mi refugio.",
      "150. Me llenas de amor puro.",
      "151. Tu sonrisa es mi suerte.",
      "152. Me haces sentir bendecido.",
      "153. Eres mi ángel.",
      "154. Me haces sentir en paz.",
      "155. Tu amor es mi tranquilidad.",
      "156. Eres mi refugio.",
      "157. Me haces sentir seguro.",
      "158. Tu voz es mi consuelo.",
      "159. Me haces sentir protegido.",
      "160. Eres mi protector.",
      "161. Me haces sentir valorado.",
      "162. Tu amor es mi tesoro.",
      "163. Eres mi joya.",
      "164. Me haces sentir especial.",
      "165. Tu sonrisa es mi regalo.",
      "166. Me haces sentir agradecido.",
      "167. Eres mi bendición.",
      "168. Me haces sentir vivo.",
      "169. Tu amor es mi vida.",
      "170. Eres mi todo.",
      "171. Me haces sentir completo.",
      "172. Tu sonrisa es mi felicidad.",
      "173. Me haces sentir realizado.",
      "174. Eres mi logro.",
      "175. Me haces sentir satisfecho.",
      "176. Tu amor es mi recompensa.",
      "177. Eres mi premio.",
      "178. Me haces sentir afortunado.",
      "179. Tu sonrisa es mi suerte.",
      "180. Me haces sentir bendecido.",
      "181. Eres mi ángel.",
      "182. Me haces sentir en paz.",
      "183. Tu amor es mi tranquilidad.",
      "184. Eres mi refugio.",
      "185. Me haces sentir seguro.",
      "186. Tu voz es mi consuelo.",
      "187. Me haces sentir protegido.",
      "188. Eres mi protector.",
      "189. Me haces sentir valorado.",
      "190. Tu amor es mi tesoro.",
      "191. Eres mi joya.",
      "192. Me haces sentir especial.",
      "193. Tu sonrisa es mi regalo.",
      "194. Me haces sentir agradecido.",
      "195. Eres mi bendición.",
      "196. Me haces sentir vivo.",
      "197. Tu amor es mi vida.",
      "198. Eres mi todo.",
      "199. Me haces sentir completo.",
      "200. Tu amor es mi todo"
    ];
    
 
  


const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensajeTexto.textContent = mensajeAleatorio;
}

// Mostrar un mensaje aleatorio al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playlistItems = document.querySelectorAll('.playlist ul li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
        });
    });
});

// JavaScript para mostrar la sorpresa
document.getElementById('sorpresa-btn').addEventListener('click', function() {
    const contenido = document.getElementById('sorpresa-content');
    contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});

// Obtener las referencias a las manos y al canvas
const leftHand = document.getElementById('leftHand');  // Mano izquierda
const rightHand = document.getElementById('rightHand');  // Mano derecha
const canvas = document.getElementById('redThread');  // Canvas para el hilo
const ctx = canvas.getContext('2d');  // Contexto de dibujo en 2D
canvas.width = window.innerWidth;  // El lienzo ocupa todo el ancho de la ventana
canvas.height = window.innerHeight;  // El lienzo ocupa toda la altura de la ventana

// Número de segmentos del hilo
const segments = 30;  
const points = [];  // Array para almacenar los puntos de cada segmento del hilo
const stiffness = 0.5;  // Rigidez del hilo
const damping = 0.9;  // Amortiguación del movimiento
const segmentLength = Math.hypot(rightHand.offsetLeft - leftHand.offsetLeft, rightHand.offsetTop - leftHand.offsetTop) / segments;  // Longitud de cada segmento del hilo

// Función que inicializa los puntos del hilo
function initializeThread() {
    for (let i = 0; i <= segments; i++) {
        points.push({
            x: leftHand.offsetLeft + (i / segments) * (rightHand.offsetLeft - leftHand.offsetLeft),
            y: leftHand.offsetTop + (i / segments) * (rightHand.offsetTop - leftHand.offsetTop),
            oldX: 0,
            oldY: 0,
            vx: 0,
            vy: 0
        });
    }
}

// Función que actualiza la posición de los puntos del hilo
function updateThread() {
    // Actualizar las posiciones de los extremos del hilo (las manos)
    points[0].x = leftHand.offsetLeft + leftHand.width / 1.2;
    points[0].y = leftHand.offsetTop + leftHand.height / 1.2;
    points[segments].x = rightHand.offsetLeft + rightHand.width / 1.2;
    points[segments].y = rightHand.offsetTop + rightHand.height / 1.321;

    points[1].x = (points[0].x + points[2].x) / 2 + Math.sin(Date.now() * 0.005) * 10;
    points[1].y = (points[0].y + points[2].y) / 2 + Math.cos(Date.now() * 0.005) * 10;

    // Actualizar las posiciones de los segmentos intermedios
    for (let i = 1; i < segments; i++) {
        let prev = points[i - 1];
        let curr = points[i];
        let next = points[i + 1];
        
        let dx = curr.x - curr.oldX;
        let dy = curr.y - curr.oldY;
        
        curr.oldX = curr.x;
        curr.oldY = curr.y;
        
        curr.x += dx * damping;  // Aplicar amortiguación
        curr.y += dy * damping;
        
        let dist = Math.hypot(next.x - curr.x, next.y - curr.y);  // Distancia entre segmentos
        let diff = (dist - segmentLength) / dist;  // Diferencia entre la distancia deseada y la actual
        let offsetX = (next.x - curr.x) * diff * stiffness;  // Desplazamiento en X
        let offsetY = (next.y - curr.y) * diff * stiffness;  // Desplazamiento en Y
        
        curr.x += offsetX;  // Ajustar posición X
        curr.y += offsetY;  // Ajustar posición Y
        next.x -= offsetX;  // Ajustar la posición del siguiente segmento
        next.y -= offsetY;  // Ajustar la posición del siguiente segmento

    }
}

// Función que dibuja el hilo en el canvas
function drawThread() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar el lienzo
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);  // Iniciar el dibujo en el primer punto
    for (let i = 1; i <= segments; i++) {
        ctx.lineTo(points[i].x, points[i].y);  // Dibujar una línea entre cada punto del hilo
    }
    ctx.strokeStyle = 'red';  // Establecer el color del hilo como rojo
    ctx.lineWidth = 3;  // Establecer el grosor de la línea
    ctx.stroke();  // Dibujar la línea
}

// Función de animación para actualizar y dibujar el hilo continuamente
function animate() {
    updateThread();  // Actualizar la posición del hilo
    drawThread();  // Dibujar el hilo
    requestAnimationFrame(animate);  // Solicitar el siguiente frame de la animación
}

// Función para hacer que las manos sean arrastrables
function makeDraggable(hand) {
    let isDragging = false;  // Variable para saber si se está arrastrando
    let offsetX, offsetY;  // Variables para el desplazamiento del cursor
    
    // Evento cuando se presiona el botón del ratón
    hand.addEventListener('mousedown', (e) => {
        isDragging = true;  // Iniciar el arrastre
        offsetX = e.clientX - hand.offsetLeft;  // Calcular el desplazamiento horizontal
        offsetY = e.clientY - hand.offsetTop;  // Calcular el desplazamiento vertical
        hand.style.transform = "scale(1.1)";  // Aumentar el tamaño de la mano para dar un efecto visual
    });
    
    // Evento cuando se mueve el ratón
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            hand.style.left = `${e.clientX - offsetX}px`;  // Mover la mano horizontalmente
            hand.style.top = `${e.clientY - offsetY}px`;  // Mover la mano verticalmente
        }
    });
    
    // Evento cuando se suelta el botón del ratón
    document.addEventListener('mouseup', () => {
        isDragging = false;  // Detener el arrastre
        hand.style.transform = "scale(1.1)";  // Volver al tamaño original de la mano
    });
}

// Inicializar el hilo, hacerlo arrastrable y empezar la animación
initializeThread();
makeDraggable(leftHand);
makeDraggable(rightHand);
animate();
document.addEventListener('DOMContentLoaded', function() {
  // Reproducir primera canción
  const playButton1 = document.getElementById('playButton1');
  const audio1 = document.getElementById('audio1');
  if (playButton1 && audio1) {
    playButton1.addEventListener('click', function() {
      audio1.play();
    });
  }

  // Reproducir segunda canción
  const playButton2 = document.getElementById('playButton2');
  const audio2 = document.getElementById('audio2');
  if (playButton2 && audio2) {
    playButton2.addEventListener('click', function() {
      audio2.play();
    });
  }
});
const gameArea = document.getElementById("game-area");
const scoreElement = document.getElementById("score");
const progressBar = document.querySelector(".progress");
let score = 0;
let heartInterval;

function spawnHeart() {
    if (score >= 10) return;

    const heart = document.createElement("div");
    heart.classList.add("heart2");
    heart.textContent = "❤️";
    heart.style.left = `${Math.random() * 90}vw`;
    heart.style.top = `-50px`;

    heart.addEventListener("click", () => {
        score++;
        scoreElement.textContent = score;
        progressBar.style.width = `${(score / 10) * 100}%`;
        heart.remove();

        if (score === 10) {
            clearInterval(heartInterval);
            alert("¡Felicidades! Ahora mira la sorpresa ❤️🎉");
            window.location.href = "sorpresa.html"; 
        }
    });

    gameArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

heartInterval = setInterval(spawnHeart, 1000);

// Partículas en el fondo
const particlesCanvas  = document.getElementById("particles");
const particlesCtx = particlesCanvas .getContext("2d");
particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;

let particles = [];

function createParticle() {
    return {
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        size: Math.random() * 8 + 2,
        speedY: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
    };
}

for (let i = 0; i < 50; i++) {
    particles.push(createParticle());
}

function drawParticles() {
  particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    
    for (let particle of particles) {
      particlesCtx.fillStyle = `rgba(255, 0, 100, ${particle.opacity})`;
      particlesCtx.font = `${particle.size}px Arial`;
      particlesCtx.fillText("❤️", particle.x, particle.y);
        particle.y -= particle.speedY;

        if (particle.y < -10) {
            particle.y = particlesCanvas.height;
            particle.x = Math.random() * particlesCanvas.width;
        }
    }
    
    requestAnimationFrame(drawParticles);
}

drawParticles();
