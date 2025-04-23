function create_profile(){
    const profile_container = document.getElementById('profile_container');
    
    // Hacer visible el contenedor primero
    profile_container.style.display = 'flex';
    
    // Verificar si ya existe una tarjeta de perfil
    const existingCard = document.querySelector('.profile_card');
    if (existingCard) {
        return;
    }

    // Ocultar otros elementos
    hide_search_card();
    hide_welcome();
    hide_fight_container();
    hide_all();
    hide_Digimon_Capture();
    hide_collected();

    const profileCard = document.createElement('div');
    profileCard.className = 'profile_card';
    profileCard.innerHTML = `
        <div class="title">
            <h1>DigimonApi</h1>
            <p>Santiago Ramirez Torres</p>
        </div>
        <div class="imagen">
            <img src="./assets/digimon logo.png" alt="Imagen de perfil">
        </div>
        <div class="description">
            <p>Api con informacion de todos los digimons</p>
        </div>
        <div class="info">
            <small>github/AcolombianBoy</small>
            <small>v. 1.0.1</small>
        </div>
    `;
    profile_container.appendChild(profileCard); 
}
