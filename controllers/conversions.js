exports.makeConversion = (req, res, next) => {
	const input = req.query.data;
	const firstNum = input.search(/\d/);
	const firstLetter = input.search(/[a-zA-Z]+/);
	let num = input.slice(firstNum, firstLetter).trim();
	const unit = input
		.slice(firstLetter)
		.trim()
		.toLowerCase();
	// TODO: Add more validations

	if (num.match(/\//)) {
		let fracArr = num.split('/');
		num = fracArr[0] / fracArr[1];
	} else if (isNaN(num) || num == '') {
		console.log('not a number');
	}

	var newNum = 0;
	var newUnit = 0;
	var newUnitFull = '';
	var prevUnitFull = '';

	switch (unit) {
		case 'gal':
			newNum = num * 3.78541;
			newUnit = 'l';
			newUnitFull = 'liters';
			prevUnitFull = 'gallons';
			break;
		case 'l':
			newNum = num / 3.78541;
			newUnit = 'gal';
			newUnitFull = 'gallons';
			prevUnitFull = 'liters';
			break;
		case 'lbs':
			newNum = num * 0.453592;
			newUnit = 'kg';
			newUnitFull = 'kilograms';
			prevUnitFull = 'pounds';
			break;
		case 'kg':
			newNum = num / 0.453592;
			newUnit = 'lbs';
			newUnitFull = 'pounds';
			prevUnitFull = 'kilograms';
			break;
		case 'mi':
			newNum = num * 1.60934;
			newUnit = 'km';
			newUnitFull = 'kilometers';
			prevUnitFull = 'miles';
			break;
		case 'km':
			newNum = num / 1.60934;
			newUnit = 'mi';
			newUnitFull = 'miles';
			prevUnitFull = 'kilometers';
			break;
		default:
	}

	var answer =
		num + ' ' + prevUnitFull + ' converts to ' + newNum + ' ' + newUnitFull;

	res.render('conversions', {
		newNum,
		newUnit,
		newUnitFull,
		prevUnitFull,
		answer
	});
};
