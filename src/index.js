'use strict';

const app = require('./app');
const api = require('./api');
app.use('/api', api);

const port = api.get('port');
const server = app.listen(port);

server.on('listening', () =>
  console.log(`Feathers application started on ${api.get('host')}:${port}`)
);
