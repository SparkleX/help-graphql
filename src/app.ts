import * as express from  'express';
import * as bodyParser from 'body-parser';

import * as graphql from 'graphql';
import * as graphqlHTTP from 'express-graphql';
import * as graphqlIndex from './graphql/index';
import { AddressInfo } from 'net';

var app = express();


app.use(bodyParser.text({ type: 'application/graphql' }));

app.use('/graphql', graphqlHTTP({ schema: graphqlIndex.schema, pretty: true }))


app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var { address, port} = server.address() as AddressInfo;

  console.log('Example app listening at http://%s:%s', address, port);
});