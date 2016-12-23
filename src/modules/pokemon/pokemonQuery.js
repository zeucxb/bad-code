const { GraphQLList } = require('graphql');

const pokemonType = require('./types/pokemonType');
const controller = require('./controller');

const pokemonQuery = {
    getPokemons: {
        description: 'getPokemons description',
        type: new GraphQLList(pokemonType),
        resolve: () => {
            return controller.getPokemons();
        },
    },
};

module.exports = pokemonQuery;
