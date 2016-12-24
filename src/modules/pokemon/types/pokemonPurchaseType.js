const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull} = require('graphql');

const PokemonPurchaseType = new GraphQLObjectType({
  name: 'PokemonPurchaseType',
  description: 'This represents a pokemon purchase',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: GraphQLInt,
    },
    price: {
      type: GraphQLInt,
    },
    totalPrice: {
      type: GraphQLInt,
    },
  }),
});

module.exports = PokemonPurchaseType;
