const { GraphQLObjectType } = require('graphql');

const pokemonMutation = require('./pokemon/pokemonMutation');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'mutation description',
    fields: () => ({
        ...pokemonMutation,
    }),
});

module.exports = Mutation;