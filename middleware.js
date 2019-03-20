const syllyMiddleware = (req, res, next) => {
	//do anything
	next();
};

const addTeam = (req, res, next) => {
	req.team = 'Steaua';
	next();
};

const logger = (req, res, next) => {
	console.log('PROTOCOL');
	console.log(req.protocol);
	console.log('PARAMS: ', req.params);
	console.log('BODY: ', req.protocol);
	console.log('HEADERS: ', req.headers);
	console.log('ORIGINAL Url: ', req.originalUrl);

	next();
};

module.exports = {
	syllyMiddleware,
	addTeam,
	logger
};
