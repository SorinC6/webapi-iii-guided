function myError(err, req, res, next) {
	res.json({
		error: 'someting bad happen',
		message: err.message
	});
}

module.exports = { myError };
