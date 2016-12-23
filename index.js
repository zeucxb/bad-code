const app = require('express')();
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const port = process.env['PORT'] || 3000;

const schema = require('./src/schema');

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(port);
