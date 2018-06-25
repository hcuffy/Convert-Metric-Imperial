exports.makeConversion = (req, res, next) => {
	var input = req.query.data;
	const firstNum = input.search(/\d/);
	const firstLetter = input.search(/[a-zA-Z]/);
	const num = input.slice(firstNum, firstLetter).trim();
	const unit = input
		.slice(firstLetter)
		.trim()
		.toLowerCase();
	// TODO: Add more validations
	if (isNaN(num) || num == '') {
		console.log('not a number');
	}
	console.log(num);
	// TODO: Add conversion
	res.render('index');
};
