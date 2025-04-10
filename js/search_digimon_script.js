// Función para buscar Digimons por nombre
async function searchDigimon() {
    const searchInput = document.getElementById('search').value.trim();
    const container = document.getElementById('digimon-container');
    container.innerHTML = ''; // Limpiar resultados anteriores
    if (!searchInput) {
        container.innerHTML = '<p>Por favor, ingresa un nombre para buscar.</p>';
        return;
    }
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchInput}`);
        if (!response.ok) {
            throw new Error('Digimon no encontrado');
        }
        const digimon = await response.json();
        displayDigimon(digimon);
    } catch (error) {
        container.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Función para mostrar el Digimon en pantalla
function displayDigimon(digimons) {
    const container = document.getElementById('digimon-container');
    digimons.forEach(digimon => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-result">
            <h2>${digimon.name}</h2>
            <img src="${digimon.img}" alt="Imagen de ${digimon.name}">
            <p>Nivel: ${digimon.level}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Agregar evento al botón de búsqueda
document.getElementById('search-button').addEventListener('click', searchDigimon);