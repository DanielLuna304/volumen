
// Modo Oscuro
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guardar el estado del modo oscuro en el localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkModeButton.innerHTML = moonIcon;
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkModeButton.innerHTML = sunIcon;
    }
});

// Validación del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const anniversaryDate = document.getElementById("anniversaryDate").value;
    // Modifica aquí la fecha de tu aniversario - AAAA-MM-DD
    if (anniversaryDate === "2023-03-20") {
        // Guardar la fecha de aniversario en localStorage
        localStorage.setItem("anniversaryDate", anniversaryDate);
        window.location.href = "dashboard.html"; // Redirige al dashboard
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
    }
});

// Animación de los corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posicionamos el corazón de forma aleatoria en la parte superior
    heart.style.left = `${Math.random() * 100}vw`;  // Aleatorio en el eje X
    heart.style.animationDuration = `${Math.random() * 5 + 3}s`;  // Duración aleatoria de la animación

    document.body.appendChild(heart);

    // Eliminamos el corazón después de que se haya animado
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones de forma continua
setInterval(createHeart, 200);

document.addEventListener('DOMContentLoaded', function () {
    // Verifica si Driver.js está cargado
    if (typeof window.driver === 'undefined' || typeof window.driver.js === 'undefined') {
        console.error('Driver.js no está cargado. Verifica la red o el CDN.');
        return;
    }

    console.log('Driver.js está listo para usarse.');

    // Verifica si el usuario ya ha visto el tour
    if (localStorage.getItem('tourVisto') === 'true') {
        console.log('El usuario ya ha visto el tour.');
        return; // No mostrar el tour si ya lo ha visto
    }

    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        showButtons: ['next', 'previous'],
        steps: [
            {
                element: '#toggleDarkMode',
                popover: {
                    title: 'Modo Oscuro/Claro',
                    description: 'Haz clic aquí para cambiar entre el modo oscuro y claro.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#anniversaryDate',
                popover: {
                    title: 'Fecha de Aniversario',
                    description: 'Ingresa la fecha de tu aniversario en este campo.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: '#loginForm button',
                popover: {
                    title: 'Ingresar',
                    description: 'Haz clic aquí para enviar el formulario y continuar.',
                    side: 'top',
                    align: 'center'
                }
            }
        ]
    });

    console.log('Pasos del tour definidos.');

    // Iniciar el tour automáticamente cuando la página se carga
    driverObj.drive();
    console.log('Tour iniciado.');

    // Marcar que el usuario ha visto el tour
    localStorage.setItem('tourVisto', 'true');
});
const gameArea = document.getElementById("game-area");
const scoreElement = document.getElementById("score");
const progressBar = document.querySelector(".progress");
let score = 0;
let heartInterval;

function spawnHeart() {
    if (score >= 10) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");
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
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        speedY: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
    };
}

for (let i = 0; i < 50; i++) {
    particles.push(createParticle());
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let particle of particles) {
        ctx.fillStyle = `rgba(255, 0, 100, ${particle.opacity})`;
        ctx.font = `${particle.size}px Arial`;
        ctx.fillText("❤️", particle.x, particle.y);
        particle.y -= particle.speedY;

        if (particle.y < -10) {
            particle.y = canvas.height;
            particle.x = Math.random() * canvas.width;
        }
    }
    
    requestAnimationFrame(drawParticles);
}

drawParticles();
