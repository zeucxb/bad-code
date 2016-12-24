const {GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLNonNull} = require('graphql');

const PokemonRequestPurchaseType = new GraphQLInputObjectType({
  name: 'PokemonRequestPurchaseType',
  description: 'This represents a pokemon',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: GraphQLInt,
    },
  }),
});

module.exports = PokemonRequestPurchaseType;
