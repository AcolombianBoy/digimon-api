// Función asíncrona para obtener los Digimons desde la API
async function fetchDigimons() {
    try {
        // Ocultar otros contenedores
        hide_welcome(); // Ocultar mensaje de bienvenida
        hide_search_card(); // Ocultar tarjeta de búsqueda
        hide_fight_container(); // Ocultar contenedor de pelea
        // Mostrar el contenedor de Digimons
        const container = document.getElementById('digimon-container');
        container.style.display = 'grid'; // Asegúrate de que el contenedor sea visible
        const response = await fetch('https://digimon-api.vercel.app/api/digimon'); 
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        displayDigimons(data); // Mostrar los Digimons en pantalla
    } catch (error) {
        console.error('Error al obtener los Digimons:', error);
    }
}

// Función para mostrar los Digimons en pantalla
function displayDigimons(digimons) {
    const container = document.getElementById('digimon-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos Digimons
    digimons.forEach(digimon => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${digimon.name}</h2>
            <img src="${digimon.img}" alt="Imagen de ${digimon.name}">
            <p>Nivel: ${digimon.level}</p>
        `;
        container.appendChild(card);
    });
}

