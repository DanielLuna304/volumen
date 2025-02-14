function getRandomPastelColor() {
    const pastelColors = ["#FFB3BA", "#A7C7E7", "#B3E6B1", "#FFF7A1", "#E3C6FF", "#FFD1A3", "#A1F0C1", "#FFB5B5", "#D9A6FF", "#F5E1A4", "#A3D97D", "#FF99CC", "#B2D0E6", "#FFF8A3", "#D0A0FF", "#FF9F87", "#B2F1B5", "#E1C6FF", "#F8C8D1", "#FFBE93"];
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

 const availableTexts = ["Tu forma de ser conmigo", "Tu sonrisa", "Tus abrazos que me llenan de paz", "Tu risa que me llena de alegría", "Tu paciencia", "Como siempre me apoyas", "Tu manera de escucharme", "Tu forma de cuidar de mí", "Tus hermosos ojos", "Amo tu mirada❤", "Amo tu risa❤", "Amo tu VOZ❤", "Amo tus abrazos❤", "Amo tus besos❤", "Amo tu energía❤", "Amo tu dulzura❤", "Amo tu pasión❤", "Amo tu paciencia❤", "Amo tu cariño❤", "Amo tus ocurrencias❤", "Amo tu ternura❤", "Amo tu apoyo❤", "Amo tu fortaleza❤", "Amo tu confianza❤", "Amo tu sonrisa❤", "Amo tu valentía❤", "Amo tu sinceridad❤", "Amo tu optimismo❤", "Amo tu comprensión❤", "Amo tu alegría❤", "Amo tu locura❤", "Amo tu bondad❤", "Amo tus caricias❤", "Amo tu amor❤", "Amo cómo sueñas❤", "Amo cómo cuidas❤", "Amo cómo ríes❤", "Amo cómo miras❤", "Amo cómo cantas❤", "Amo cómo amas❤", "Amo cómo brillas❤", "Amo cómo piensas❤", "Amo cómo luchas❤", "Amo cómo abrazas❤", "Amo cómo besas❤", "Amo cómo hablas❤", "Amo cómo sonríes❤", "Amo cómo crees❤", "Amo cómo ayudas❤", "Amo cómo escuchas❤", "Amo cómo bailas❤", "Amo cómo enseñas❤", "Amo cómo animas❤", "Amo cómo aprendes❤", "Amo cómo me cuidas❤", "Amo cómo me apoyas❤", "Amo cómo me inspiras❤", "Amo cómo me entiendes❤", "Amo cómo me haces feliz❤", "Amo cómo me completas❤", "Amo cómo me sorprendes❤", "Amo cómo me haces reír❤", "Amo cómo me motivas❤", "Amo cómo me abrazas❤", "Amo cómo me besas❤", "Amo cómo me iluminas❤", "Amo cómo me animas❤", "Amo cómo me calmas❤", "Amo cómo me escuchas❤", "Amo cómo me miras❤", "Amo cómo me enamoras❤", "Amo cómo me haces soñar❤", "Amo cómo me haces sentir❤", "Amo cómo me entiendes❤", "Amo cómo me sostienes❤", "Amo cómo me cuidas❤", "Amo cómo me alegras❤", "Amo cómo me quieres❤", "Amo cómo me inspiras❤", "Amo cómo me haces crecer❤", "Amo cómo me llenas❤", "Amo cómo me motivas❤", "Amo cómo me guías❤", "Amo cómo me enseñas❤", "Amo cómo me abrazas fuerte❤", "Amo cómo me haces volar❤", "Amo cómo me haces vivir❤", "Amo cómo me haces❤", "Amo cómo me haces creer❤", "Amo cómo me haces soñar❤", "Amo cómo me haces imaginar❤", "Amo cómo me haces confiar❤", "Amo cómo me haces esperar❤", "Amo cómo me haces sentir seguro❤", "Amo cómo me haces brillar❤", "Amo cómo me haces ver la vida❤", "Amo cómo me haces valorar todo❤", "Amo cómo me haces especial❤", "Amo cómo me haces único❤", "Amo cómo me haces querer más❤", "Amo cómo me haces ser mejor❤", "Amo cómo me haces disfrutar❤", "Amo cómo me haces sonreír❤", "Amo cómo me haces feliz❤", "Amo cómo me haces amarte❤", "Amo cómo me haces necesitarte❤", "Amo cómo me haces esperarte❤", "Amo cómo me haces extrañarte❤", "Amo cómo me haces vivir contigo❤"];

;
let usedTexts = [];

function getRandomText() {
    if (availableTexts.length === 0) {
        availableTexts.push(...usedTexts);
        usedTexts = []; // Resetear si se han usado todos los mensajes
    }

    const randomIndex = Math.floor(Math.random() * availableTexts.length);
    const text = availableTexts.splice(randomIndex, 1)[0]; // Eliminar el mensaje usado
    usedTexts.push(text); // Agregar a los mensajes usados
    return text;
}

function mostrarNotas(cantidad) {
    const container = document.getElementById("notasContainer");
    container.innerHTML = "";  // Limpiamos el contenedor antes de generar nuevas notas

    const fragment = document.createDocumentFragment(); // Usamos un DocumentFragment para evitar múltiples reflow/repaint
    let posiciones = [];

    // Calcular el tamaño de las notas en función de la cantidad
    let size = 80;
    if (cantidad > 20) {
        size = Math.max(82, 90 - Math.floor((cantidad - 20) / 2)); // Reducir el tamaño gradualmente
    }

    const maxTop = container.offsetHeight - size;  // Limitar la posición vertical (considerando el tamaño de la nota y el contenedor)
    const maxLeft = container.offsetWidth - size; // Limitar la posición horizontal (considerando el tamaño de la nota y el contenedor)

    const margin = 20;

    let index = 0;
    function generateNextNote() {
        if (index < cantidad) {
            let nota = document.createElement("div");
            nota.className = "nota";
            nota.textContent = getRandomText();  // Texto aleatorio en cada nota
            nota.style.backgroundColor = getRandomPastelColor(); // Color aleatorio
            nota.style.width = `${size}px`;
            nota.style.height = `${size}px`;

            let overlap = true;
            let top, left;
            // Asegurarnos de que las notas no se solapen y no aparezcan cerca de los bordes
            while (overlap) {
                top = Math.random() * (maxTop - margin) + margin;  // Limitar la posición vertical (considerando el margen)
                left = Math.random() * (maxLeft - margin) + margin;  // Limitar la posición horizontal (considerando el margen)
                overlap = false;

                // Verificamos si la nueva posición se solapa con alguna anterior
                for (let j = 0; j < posiciones.length; j++) {
                    const p = posiciones[j];
                    if (Math.abs(p.top - top) < size && Math.abs(p.left - left) < size) {
                        overlap = true;
                        break;
                    }
                }
            }

            // Añadir la posición a las posiciones ocupadas
            posiciones.push({ top, left });

            // Asignar la posición final
            nota.style.top = `${top}px`;
            nota.style.left = `${left}px`;

            fragment.appendChild(nota); // Agregamos la nota al fragmento
            index++;

            // Usamos requestAnimationFrame para hacer un pequeño descanso entre la creación de notas
            requestAnimationFrame(generateNextNote);
        } else {
            container.appendChild(fragment); // Añadimos todas las notas al contenedor de una vez
        }
    }

    // Iniciar la generación de notas de forma optimizada
    generateNextNote();
}

function validarYMostrarNotas() {
    const input = document.getElementById("numeroNotas");
    const cantidad = parseInt(input.value);

    if (isNaN(cantidad) || cantidad < 1 || cantidad > 100) {
        if (input.value !== "") {
            alert("No no no niña preciosa");
        }
        return;
    }

    mostrarNotas(cantidad);
}
// Función para generar las estrellas estáticas (fondo)
const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];
    const colors = ['#ffffff', '#ffd700', '#e0ffff', '#b0e0e6', '#dcdcdc', '#f0e68c']; // Colores de las estrellas

    for (let i = 0; i < totalStars; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const color = colors[Math.floor(Math.random() * colors.length)];
        layer.push(`${x}vw ${y}vh 0 ${color}`);
    }

    //const container = document.querySelector(selector);
    //container.style.setProperty("--space-layer", layer.join(", "));
    //container.style.setProperty("--size", size);
    //container.style.setProperty("--duration", duration);
};

// Generar las estrellas estáticas de fondo
generateSpaceLayer("1px", ".space-1", 200, "30s");
generateSpaceLayer("2px", ".space-2", 100, "25s");
generateSpaceLayer("4px", ".space-3", 25, "20s");

let activeShootingStars = []; // Almacenamos las estrellas fugaces activas

// Función para generar estrellas fugaces
const generateShootingStars = () => {
const container = document.body;
const totalShootingStars = 1; // Solo una estrella fugaz a la vez

for (let i = 0; i < totalShootingStars; i++) {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    
    // Generar posiciones aleatorias en cualquier parte de la pantalla
    const xPos = Math.random() * 100; // 0 a 100vw
    const yPos = Math.random() * 100; // 0 a 100vh
    
    star.style.top = `${yPos}vh`;
    star.style.left = `${xPos}vw`;

    // Aleatorizar la duración y los retrasos de la animación
    const animationDelay = `${Math.random() * 2}s`;
    const animationDuration = `5s`; // Entre 5s y 8s (más lento)
    star.style.animationDelay = animationDelay;
    star.style.animationDuration = animationDuration;

    // Añadir la estrella al DOM
    container.appendChild(star);

    // Eliminar la estrella después de 3 segundos
    setTimeout(() => {
        star.remove();  // Eliminar el elemento después de 3 segundos
    }, 3000);
}
};

// Función para generar estrellas fugaces a intervalos aleatorios
function randomizeShootingStars() {
const randomInterval = Math.random() * (4000 - 3000) + 1000; // Intervalo aleatorio entre 3 y 8 segundos
setInterval(generateShootingStars, randomInterval); // Llama a la función en intervalos aleatorios
}

// Generar las estrellas fugaces en la pantalla
randomizeShootingStars(); // Estrella fugaz cada 3 a 8 segundos