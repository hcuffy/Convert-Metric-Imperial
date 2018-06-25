exports.makeConversion = (req, res, next) => {
	var input = req.query.data;
	let firstNum = input.replace(/[^0-9\.\/]+/g, '');
	console.log(firstNum);

	res.render('index');
};
