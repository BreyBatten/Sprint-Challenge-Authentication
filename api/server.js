const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const usersRouter = require('../users/usersRouter');

const sessionOptions = {
    name: 'sprintCookie',
    secret: 'finalSprintCookie',
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
  
    store: new knexSessionStore({
      knex: require('../database/dbConfig'),
      tablename: 'sessions',
      sidfieldname: 'sid',
      createTable: true,
      clearInterval: 1000 * 60 * 60
    })
};

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionOptions));

server.use('/api/auth', authRouter);
server.use('/api/auth/users', usersRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'FINAL SPRINT CHALLENGE OF FSW!!' });
});

module.exports = server;
