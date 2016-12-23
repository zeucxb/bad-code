const { GraphQLObjectType } = require('graphql');

const pokemonQuery = require('./pokemon/pokemonQuery');

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'query description',
    fields: () => ({
        ...pokemonQuery,
    }),
});

module.exports = Query;
