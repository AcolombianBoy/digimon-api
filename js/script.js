// Espera a que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    fetchDigimons();
}); 
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
  // Función para renderizar cada Digimon en una tarjeta
function displayDigimons(digimons) {
    const container = document.getElementById('digimon-container');
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