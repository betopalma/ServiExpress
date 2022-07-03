require('dotenv').config();

const { connection } = require('./src/database/postgres.js');
const server = require('./server');

//const { PORT } = process.env || 3001;
const port = process.env.PORT || 3001;

connection.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Servidor levantado en el puerto: ${port}`);
  });
});
