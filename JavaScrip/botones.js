function generarBurbujas() {
    const bubblesContainer = document.querySelector('.ladybug .bubbles');
    const numBubbles = 6; // Número de burbujas
    const positions = []; // Array para almacenar las posiciones usadas

    // Obtener el tamaño del botón para que las burbujas se distribuyan correctamente
    const button = document.querySelector('.ladybug');
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        let top, left;

        // Evitar que las burbujas se superpongan
        do {
            top = Math.random() * (buttonHeight - 20) + 'px'; // Posición vertical aleatoria dentro del botón
            left = Math.random() * (buttonWidth - 20) + 'px'; // Posición horizontal aleatoria dentro del botón
        } while (positions.some(pos => Math.abs(pos.top - parseFloat(top)) < 20 && Math.abs(pos.left - parseFloat(left)) < 20)); // Verificar si se solapan con posiciones anteriores

        positions.push({ top: parseFloat(top), left: parseFloat(left) });

        bubble.style.top = top;
        bubble.style.left = left;

        // Asignar un retraso aleatorio para que las burbujas se muevan de forma independiente
        bubble.style.animationDelay = Math.random() * 3 + 's'; // Retraso aleatorio entre 0 y 3 segundos

        // Añadir la burbuja al contenedor
        bubblesContainer.appendChild(bubble);
    }
}

// Ejecutar la función para generar las burbujas al cargar la página
generarBurbujas();