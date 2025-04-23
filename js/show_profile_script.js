function create_profile(){
    const profile_container = document.getElementById('profile_container');
    hide_search_card();
    hide_welcome(); // Ocultar el mensaje de bienvenida
    hide_fight_container(); // Ocultar tarjeta de búsqueda
    hide_all(); // Ocultar digimons
    hide_Digimon_Capture(); // Ocultar tarjeta de captura
    hide_collected(); // Ocultar tarjetas de colección
    const profileCard = document.createElement('div');
    profileCard.className = 'profile_card';
    profileCard.innerHTML = `
        <div class="title">
            <h1>DigimonApi</h1>
            <p>Santiago Ramirez Torres</p>
        </div>
        <div class"imagen">
            <img src="/assets/digimon logo.png" alt="Imagen de perfil">
        </div>
        <div class="description">
            <p>Api con informacion de todos los digimons</p>
        </div>
        <br><br>
        <div class="info">
            <small>guithub/AcolombianBoy</small>
            <small>v. 1.0.1</small>
        </div>
    `;
    profile_container.appendChild(profileCard); 
}
