const { GraphQLSchema } = require('graphql');

const query = require('./modules/query');
const mutation = require('./modules/mutation');

module.exports = new GraphQLSchema({
    query,
    mutation,
});
