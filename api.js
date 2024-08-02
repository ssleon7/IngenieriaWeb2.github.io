import CharacterController from './controlador/controlador.js';

document.addEventListener('DOMContentLoaded', async () => {
    const charactersContainer = document.getElementById('characters');
    const characters = await CharacterController.displayAllCharacters();

    characters.forEach(character => {
        const characterCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Status: ${character.status}</p>
                        <p class="card-text">Species: ${character.species}</p>
                    </div>
                </div>
            </div>
        `;
        charactersContainer.innerHTML += characterCard;
    });
});
