const {GraphQLObjectType, GraphQLString, GraphQLInt} = require('graphql');

const PokemonType = new GraphQLObjectType({
  name: 'PokemonType',
  description: 'This represents a pokemon',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
    stock: {
      type: GraphQLInt,
    },
  }),
});

module.exports = PokemonType;
