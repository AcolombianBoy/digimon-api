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
    const searchInput = document.getElementById('search').value.trim().toLowerCase();
    const container = document.getElementById('digimon-container');
    
    // Primero, ocultar todos los elementos que no necesitamos
    hide_welcome();
    hide_fight_container();
    hide_profile();
    hide_Digimon_Capture();
    
    // Hacer visible el contenedor de búsqueda
    container.style.display = 'grid';
    container.innerHTML = ''; // Limpiar resultados anteriores

    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!response.ok) {
            throw new Error('Error al obtener los Digimons');
        }
        
        const digimons = await response.json();
        
        // Buscar coincidencias
        const exactMatch = digimons.filter(digimon => 
            digimon.name.toLowerCase() === searchInput
        );
        
        const partialMatches = digimons.filter(digimon => 
            digimon.name.toLowerCase().includes(searchInput) && 
            digimon.name.toLowerCase() !== searchInput
        );

        // Mostrar resultados
        if (exactMatch.length > 0) {
            displayDigimon(exactMatch);
        } else if (partialMatches.length > 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No se encontró una coincidencia exacta, pero aquí hay nombres similares:</p>';
            displayDigimon(partialMatches);
        } else {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">No se encontraron Digimons con ese nombre.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: red;">Error: ${error.message}</p>`;
    }
}

// Agregar evento al botón de búsqueda
document.getElementById('search-button').addEventListener('click', searchDigimon);