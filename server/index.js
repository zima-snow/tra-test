const jsonServer = require('json-server');
const db = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use('/api', router);

server.listen(9000, () => {
  console.log('JSON Server is running');
});
