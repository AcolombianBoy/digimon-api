// Función para mostrar los Digimons coleccionados
function showCollectedDigimons() {
    const container = document.getElementById('digimon-container');
    container.innerHTML = ''; // Limpiar el contenedor
    if (collectedDigimons.length === 0) {
        container.innerHTML = '<p>No has capturado ningún Digimon aún.</p>';
        return;
    }
    collectedDigimons.forEach(digimon => {
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