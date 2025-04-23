// Función para mostrar los Digimons coleccionados
function showCollectedDigimons() {
    const container = document.getElementById('digimon-container');
    
    // Asegurarse de que el contenedor sea visible y limpiar contenido anterior
    container.style.display = 'grid';
    container.innerHTML = '';

    // Ocultar otros elementos primero
    hide_welcome();
    hide_search_card();
    hide_fight_container();
    hide_profile();
    hide_Digimon_Capture();

    // Verificar si hay Digimons coleccionados
    if (!collectedDigimons || collectedDigimons.length === 0) {
        container.innerHTML = '<p style="color: red; font-size: 20px; text-align: center;">No has capturado ningún Digimon aún.</p>';
        return;
    }

    // Mostrar los Digimons coleccionados
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