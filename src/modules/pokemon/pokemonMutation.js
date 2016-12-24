const pokemonType = require('./types/pokemonType');
const pokemonInputType = require('./types/pokemonInputType');
const pokemonPurchaseType = require('./types/pokemonPurchaseType');
const pokemonRequestPurchaseType = require('./types/pokemonRequestPurchaseType');
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
    resolve: (parent, {pokemon}) => {
      return controller.createPokemons(pokemon);
    },
  },
  buyPokemons: {
    description: 'This buy a pokémon',
    type: pokemonPurchaseType,
    args: {
      pokemon: {
        description: 'A pokémon to be saved in the database',
        type: pokemonRequestPurchaseType,
      },
    },
    resolve: (parent, {pokemon}) => {
      return controller.buyPokemons(pokemon);
    },
  },
};

module.exports = pokemonMutation;
