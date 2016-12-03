'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env['port'] || 3000;

app.use(bodyParser.json());
app.use('/api', require('./src/router'));

app.listen(port);