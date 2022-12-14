const http = require('http'); // import http
const app = require('./app'); //import app
const config = require('./config').config

const normalizePort = val => { //normalize port check forr real number 
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(config.port || '3300');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      config.logger.info(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      config.logger.debug(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};


const server = http.createServer({}, app);


server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  config.logger.info('Listening on ' + bind);

});

server.listen(port);
