exports.makeConversion = (req, res, next) => {
	var input = req.query.data;
	const firstNum = input.search(/\d/);
	const firstLetter = input.search(/[a-zA-Z]+/);
	const num = input.slice(firstNum, firstLetter).trim();
	const unit = input
		.slice(firstLetter)
		.trim()
		.toLowerCase();
	// TODO: Add more validations
	if (isNaN(num) || num == '') {
		console.log('not a number');
	}
	var newNum = 0;
	var newUnit = '';
	var fullUnit = '';

	switch (unit) {
		case 'gal':
			newNum = num * 3.78541;
			newUnit = 'l';
			fullUnit = 'gallons';
			break;
		case 'l':
			newNum = num / 3.78541;
			newUnit = 'gal';
			fullUnit = 'liters';
			break;
		case 'lbs':
			newNum = num * 0.453592;
			newUnit = 'kg';
			fullUnit = 'kilograms';
			break;
		case 'kg':
			newNum = num / 0.453592;
			newUnit = 'lbs';
			fullUnit = 'pounds';
			break;
		case 'mi':
			newNum = num * 1.60934;
			newUnit = 'km';
			fullUnit = 'kilometers';
			break;
		case 'km':
			newNum = num / 1.60934;
			newUnit = 'mi';
			fullUnit = 'miles';
			break;
		default:
	}
	console.log(
		num + ' ' + unit + ' ' + newUnit + ' ' + newNum + '  ' + fullUnit
	);
	res.render('index');
};
