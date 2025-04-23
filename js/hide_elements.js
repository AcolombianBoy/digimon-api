function hide_welcome() { // Ocultar el mensaje de bienvenida
    document.getElementById('welcome').style.display = 'none';
}
function hide_search_card(){
    const searchCards = document.getElementsByClassName('search_card');
    if (searchCards.length > 0) {
        searchCards[0].style.display = 'none'; // Ocultar la primera tarjeta de búsqueda
    } else {
        console.log('No se encontraron elementos con la clase "search_card".');
    }
}
function hide_fight_container() {
    const fight_cards = document.getElementById('fight_container');
    if(fight_cards) {
        fight_cards.style.display = 'none'; 
    }else {
        console.warn('No se encontró ningún elemento con el ID "fight_card".');
    }
    const audio = document.getElementById('fight_theme');
    audio.pause(); // Pausar el audio
    audio.currentTime = 0; // Reiniciar el tiempo del audio  
}
function hide_all() {
    const all = document.getElementById('digimon-container');
    if (all) {
        all.style.display = 'none'; // Ocultar digimons
    } else {
        console.warn('No se encontró ningún elemento con el ID "card".');
    }
}
function hide_Digimon_Capture() {
    const captureCards = document.getElementsByClassName('capture_card');
    if (captureCards.length > 0) {
        captureCards[0].style.display = 'none'; // Ocultar la primera tarjeta de captura
    } else {
        console.log('No se encontraron elementos con la clase "capture_card".');
    }
}
function hide_collected() {
    const cards = document.getElementsByClassName('card');
    if (cards.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'none'; // Ocultar todas las tarjetas
        }
    } else {
        console.log('No se encontraron elementos con la clase "card".');
    }
}
function hide_profile(){
    const container = document.getElementById('profile_container');
    if(container) { // Verifica si el elemento existe
        container.style.display = 'none'; // Ocultar el contenedor de perfil
    } else {
        console.warn('No se encontró ningún elemento con el ID "profile_container".');
    }
}