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
