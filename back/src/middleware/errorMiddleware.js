const errorMiddleware = (err, req, res, next) => {
	console.log('error midleware');
	res.status(err.status || 500);
	res.send({
		errorMessage: err.message,
	});
	next();
};

module.exports = { errorMiddleware };
