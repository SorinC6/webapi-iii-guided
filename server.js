const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const md = require('./middleware');
const err = require('./errors');

const syllyMiddleware = md.syllyMiddleware;
const addTeam = md.addTeam;
const logger = md.logger;
const auth = md.auth;
const myError = err.myError;

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
//server.use(syllyMiddleware);
server.use(addTeam);
server.use(logger);
server.use(auth('eu'));

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res, next) => {
	if (req.headers.foo) {
		res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${req.team} to the Lambda Hubs API</p>
    `);
	} else {
		next({ message: 'message if works' });
	}
});

server.use(myError);
module.exports = server;
