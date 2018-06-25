exports.makeConversion = (req, res, next) => {
	var input = req.query.data;
	let firstNum = input.search(/\d/);
	let firstLetter = input.search(/[a-zA-Z]/);

	let num = input.slice(firstNum, firstLetter);
	console.log(num);

	res.render('index');
};
