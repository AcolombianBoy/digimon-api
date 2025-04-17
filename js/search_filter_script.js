async function searchFilter() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        const textValue = item.textContent || item.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
async function filterDigimons() {
    const level = document.getElementById('type').value.toLowerCase().trim(); // Normalizar el nivel seleccionado
    const container = document.getElementById('digimon-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de mostrar los resultados
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!response.ok) {
            throw new Error('Error al obtener los Digimons');
        }
        const digimons = await response.json();
        // Filtrar los Digimons según el nivel seleccionado
        const filteredDigimons = level === 'all'
            ? digimons // Mostrar todos si se selecciona "Todos"
            : digimons.filter(digimon => digimon.level.toLowerCase().trim() === level);
        // Mostrar los Digimons filtrados
        displayDigimons(filteredDigimons);
    } catch (error) {
        console.error('Error al filtrar los Digimons:', error);
        container.innerHTML = `<p>Error al filtrar los Digimons: ${error.message}</p>`;
    }
}