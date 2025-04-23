// Función para mostrar el Digimon en pantalla
function displayDigimon(digimons) {
    const container = document.getElementById('digimon-container');
    container.innerHTML = ''; // Limpiar resultados anteriores
    digimons.forEach(digimon => {
        const search_card = document.createElement('div');
        search_card.className = 'search_card';
        search_card.innerHTML = `
            <h2>${digimon.name}</h2>
            <img src="${digimon.img}" alt="Imagen de ${digimon.name}">
            <p>Nivel: ${digimon.level}</p>
        `;
        container.appendChild(search_card);
    });
}
// Función para buscar Digimons por nombre
async function searchDigimon() {
    const searchInput = document.getElementById('search').value.trim().toLowerCase(); // Convertir a minúsculas
    const container = document.getElementById('digimon-container');
    const fightContainer = document.getElementById('fight_container');
    // Mostrar el contenedor de búsqueda y ocultar el de pelea
    container.style.display = 'grid'; // Asegúrate de que el contenedor sea visible
    fightContainer.style.display = 'none'; // Ocultar el contenedor de pelea
    container.innerHTML = ''; // Limpiar resultados anteriores
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!response.ok) {
            throw new Error('Error al obtener los Digimons');
        }
        const digimons = await response.json();
        // Buscar coincidencia exacta
        const exactMatch = digimons.filter(digimon => digimon.name.toLowerCase() === searchInput);
        // Buscar coincidencias parciales (nombres similares)
        const partialMatches = digimons.filter(digimon => digimon.name.toLowerCase().includes(searchInput));
        if (exactMatch.length > 0) {
            hide_fight_container()
            hide_welcome();
            hide_profile();
            displayDigimon(exactMatch); // Mostrar coincidencia exacta
        } else if (partialMatches.length > 0) {
            hide_fight_container()
            hide_welcome();
            hide_profile();
            container.innerHTML = '<p>No se encontró una coincidencia exacta, pero aquí hay nombres similares:</p>';
            displayDigimon(partialMatches); // Mostrar coincidencias parciales
        } else {
            hide_fight_container()
            hide_welcome();
            hide_profile();
            container.innerHTML = '<p>No se encontraron Digimons con ese nombre.</p>';
        }
    } catch (error) {
        container.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Agregar evento al botón de búsqueda
document.getElementById('search-button').addEventListener('click', searchDigimon);