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

const server = app.listen(port, () => {
  const address = server.address();
  console.log('Api listening at http://%s:%s', address.address, address.port);
});
