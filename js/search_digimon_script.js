// Función para mostrar el Digimon en pantalla
let digiData = JSON.parse(localStorage.getItem('digimons'));
function displayDigimon(digimons) {
    const container = document.getElementById('digimon-container');
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
// Agregar evento al botón de búsqueda
document.getElementById('search-button').addEventListener('click', searchDigimon);