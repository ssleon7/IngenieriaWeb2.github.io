import Character from '../modelo/modelo.js';

class CharacterController {
    static async displayAllCharacters() {
        const characters = await Character.getAll();
        return characters;
    }

    static async displayCharacterDetails(id) {
        const character = await Character.getById(id);
        return character;
    }
}

export default CharacterController;
