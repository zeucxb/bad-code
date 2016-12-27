const pokemonType = require('./types/pokemonType');
const pokemonInputType = require('./types/pokemonInputType');
const pokemonPurchaseType = require('./types/pokemonPurchaseType');
const pokemonRequestPurchaseType = require('./types/pokemonRequestPurchaseType');
const {GraphQLString} = require('graphql');
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
  buyPokemon: {
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
  deletePokemon: {
    description: 'This delete a pokémon',
    type: pokemonType,
    args: {
      name: {
        description: 'The name of a pokémon to be deleted',
        type: GraphQLString,
      },
    },
    resolve: (parent, {name}) => {
      return controller.deletePokemons({name});
    },
  },
};

module.exports = pokemonMutation;
