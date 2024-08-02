class Character {
    static async getAll() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    }

    static async getById(id) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching character by ID:', error);
        }
    }
}

export default Character;
