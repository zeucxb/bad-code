const { GraphQLList } = require('graphql');

const pokemonType = require('./types/pokemonType');
const controller = require('./controller');

const pokemonQuery = {
    getPokemons: {
        description: 'This returns all the pokémons in the database',
        type: new GraphQLList(pokemonType),
        resolve: () => {
            return controller.getPokemons();
        },
    },
};

module.exports = pokemonQuery;
