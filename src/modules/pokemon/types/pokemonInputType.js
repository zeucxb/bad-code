const {GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLNonNull} = require('graphql');

const PokemonInputType = new GraphQLInputObjectType({
  name: 'PokemonInputType',
  description: 'This represents a pokemon',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: GraphQLInt,
    },
    stock: {
      type: GraphQLInt,
    },
  }),
});

module.exports = PokemonInputType;
