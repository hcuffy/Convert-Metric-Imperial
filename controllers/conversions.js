exports.makeConversion = (req, res, next) => {
	var input = req.query.data;
	let firstNum = input.search(/\d/);
	let firstLetter = input.search(/[a-zA-Z]/);
	let num = input.slice(firstNum, firstLetter).trim();
	let unit = input.slice(firstLetter).trim();
	console.log(unit);

	res.render('index');
};
