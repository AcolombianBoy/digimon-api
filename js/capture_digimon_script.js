// Array para almacenar los Digimons coleccionados
let collectedDigimons = JSON.parse(localStorage.getItem('collectedDigimons')) || [];

// Función para capturar un Digimon aleatorio
async function captureDigimon() {
    hide_search_card();
    hide_welcome();
    hide_fight_container();
    hide_all();
    hide_profile();
    const container = document.getElementById('digimon-container');
    container.style.display = 'grid'; // Asegúrate de que el contenedor sea visible
    container.innerHTML = ''; // Limpiar el contenedor
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!response.ok) {
            throw new Error('Error al obtener los Digimons');
        }
        const digimons = await response.json();
        // Seleccionar un Digimon aleatorio
        const randomIndex = Math.floor(Math.random() * digimons.length);
        const randomDigimon = digimons[randomIndex];
        console.log(randomDigimon); // Verifica los datos del Digimon capturado
        console.log(randomDigimon.img); // Verifica la URL de la image
        // Agregar el Digimon capturado a la lista de coleccionados
        collectedDigimons.push(randomDigimon);
        // Guardar en localStorage
        localStorage.setItem('collectedDigimons', JSON.stringify(collectedDigimons));
        // Mostrar el Digimon capturado
        const captureCard = document.createElement('div');
        captureCard.className = 'capture_card';
        captureCard.innerHTML = `
            <h2>${randomDigimon.name}</h2>
            <img src="${randomDigimon.img}" alt="Imagen de ${randomDigimon.name}">
            <p>Nivel: ${randomDigimon.level}</p>
            <p>¡Has capturado a ${randomDigimon.name}!</p>
            <button onclick="showCollectedDigimons()">Ver Colección</button>
            <button onclick=captureDigimon()>Capturar otro</button>
        `;
        container.appendChild(captureCard);
    } catch (error) {
        console.error('Error al capturar el Digimon:', error);
        container.innerHTML = `<p>Error al capturar el Digimon: ${error.message}</p>`;
    }
}
