const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const router = require('./src/routes');
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');

// Middlewares
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser('secret'));
server.use(morgan('dev'));
server.use(express.json());
server.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
);
server.use(express.static('public'));
// set up session cookies
server.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  })
);
// manejador de sesión
server.use(
  session({
    secret: 'secret',
    resave: false, // don't save session if unmodified
    saveUninitialized: false
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(passport.authenticate('session'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
server.use('/', router);
// Endwares
server.use(({ message }, req, res, next) => {
  console.log(`index error: ${message}`);
  res.status(500).send({ message });
});

module.exports = server;
