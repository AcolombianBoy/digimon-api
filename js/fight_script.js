async function Digimon_fight() {
    hide_welcome(); // Ocultar el mensaje de bienvenida
    hide_search_card(); // Ocultar tarjeta de búsqueda
    playTheme();
    hide_all();
    const container = document.getElementById('fight_container');
    container.style.display = 'flex'; // Asegúrate de que el contenedor sea visible
    container.innerHTML = ''; // Limpiar el contenedor
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!response.ok) {
            throw new Error('Error al obtener los Digimons');
        }
        const digimons = await response.json();
        // Seleccionar un Digimon aleatorio
        const random = Math.floor(Math.random() * digimons.length);
        const randomDigimon = digimons[random];
        console.log(randomDigimon.img); // Verifica la URL de la imagen
        // Crear y mostrar la tarjeta del Digimon
        const fight_card = document.createElement('div');
        fight_card.className = 'fight_card';
        fight_card.innerHTML = `
            <h2>${randomDigimon.name}</h2>
            <img id="digi_shake" src="${randomDigimon.img}" alt="Imagen de ${randomDigimon.name}">
            <p>Nivel: ${randomDigimon.level}</p>
            <p>Vida: <span id="digimon_health">100</span></p>
            <button onclick="punch()">Atacar</button>
        `;
        container.appendChild(fight_card);
        window.DigimonHealth = 100; // Inicializar la vida del Digimon
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function playTheme() {
    const audio = document.getElementById('fight_theme');
    if (audio) {
        audio.volume = 0.35
        audio.play();
    } else {
        console.error('No se encontró el elemento de audio con el ID "fight_theme".');
    }
}
function shakeElement(digi_shake) {
    const element_shake = document.getElementById(digi_shake);
    // Agregar animación
    element_shake.classList.add('shake');
    // Eliminar la clase después de que termine la animación (0.5s en este caso)
    setTimeout(() => {
        element_shake.classList.remove('shake');
    }, 500); 
}
function punch() {
    const audio_hit = document.getElementById('hit_sound');
    audio_hit.play();
    audio_hit.currentTime = 0; // Reproducir el audio
    window.DigimonHealth -= 10; // Reducir la vida del Digimon en 10
    const health = document.getElementById('digimon_health');
    health.innerText = window.DigimonHealth; // Mostrar la vida actual del Digimon
    // Agitar la tarjeta del Digimon
    shakeElement('digi_shake');
    if (window.DigimonHealth <= 0) {
        const container = document.getElementById('fight_container');
        container.innerHTML = `<p>¡Has ganado! El Digimon ha sido derrotado.</p>`;
        Digimon_fight(); // Recargar la pelea
    }
}