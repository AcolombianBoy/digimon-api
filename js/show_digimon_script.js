// Función asíncrona para obtener los Digimons desde la API
async function fetchDigimons() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon'); 
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        displayDigimons(data);
    } catch (error) {
        console.error('Error al obtener los Digimons:', error);
    }
}
// Función para mostrar los Digimons en pantalla
function displayDigimons(digimons) {
    hide_welcome(); // Ocultar mensaje de bienvenida

    // Ocultar resultados de búsqueda anteriores si existen
    const searchCards = document.getElementsByClassName('search_card');
    if (searchCards.length > 0) {
        hide_search_card();
    }

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

