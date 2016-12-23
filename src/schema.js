const { GraphQLSchema } = require('graphql');

const query = require('./modules/query');

module.exports = new GraphQLSchema({
    query,
});
