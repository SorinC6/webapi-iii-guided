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
	console.log('HOST: ', req.hostname);
	console.log('PARAMS: ', req.params);
	console.log('BODY: ', req.protocol);
	console.log('ORIGINAL Url: ', req.originalUrl);
	console.log('HEADERS: ', req.headers);

	next();
};

function auth(password) {
	return function(req, res, next) {
		const token = req.headers.authorization;
		if (token === password) {
			next();
		} else {
			res.status(401).json({ message: "YOU DON'T KNOW MY PASSWORD :P" });
		}
	};
}

module.exports = {
	syllyMiddleware,
	addTeam,
	logger,
	auth
};
