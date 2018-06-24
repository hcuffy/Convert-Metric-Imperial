exports.makeConversion = (req, res, next) => {
	var test = req.query;
	console.log(test);

	res.render('index');
};
