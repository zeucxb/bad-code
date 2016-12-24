const pokemonType = require('./types/pokemonType');
const pokemonInputType = require('./types/pokemonInputType');
const controller = require('./controller');

const pokemonMutation = {
    createPokemon: {
        description: 'This creates a new pokémon',
        type: pokemonType,
        args: {
            pokemon: {
                description: 'A pokemon to be saved in the database',
                type: pokemonInputType,
            },
        },
        resolve: (parent, { pokemon }) => {
          return controller.createPokemons(pokemon);
        },
    },
};

module.exports = pokemonMutation;
