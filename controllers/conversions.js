function validations(res, num, unit) {
	var unitsArr = ['gal', 'l', 'kg', 'lbs', 'mi', 'km']

	if (!unitsArr.includes(unit) && isNaN(num)) {
		res.render('invalid', { invalid: 'Invalid Unit & Number' })
	} else if (!unitsArr.includes(unit)) {
		res.render('invalid', { invalid: 'Invalid Unit' })
	} else if (isNaN(num) || num == '') {
		res.render('invalid', { invalid: 'Invalid number' })
	}
}

exports.makeConversion = (req, res, next) => {
	const input = req.query.data
	console.log(input)
	const firstNum = input.search(/\d/)
	const firstLetter = input.search(/[a-zA-Z]+/)
	let num = input.slice(firstNum, firstLetter).trim()
	let unit = input
		.slice(firstLetter)
		.trim()
		.toLowerCase()

	if (num == '') {
		num = 1
	}

	if (num.match(/\//)) {
		let fracArr = num.split('/')
		num = fracArr[0] / fracArr[1]
	}
	console.log(num+ ' '+ unit)
	validations(res, num, unit)

	var newNum = 0
	var newUnit = 0
	var newUnitFull = ''
	var prevUnitFull = ''

	switch (unit) {
	case 'gal':
		newNum = num * 3.78541
		newUnit = 'l'
		newUnitFull = 'liters'
		prevUnitFull = 'gallons'
		break
	case 'l':
		newNum = num / 3.78541
		newUnit = 'gal'
		newUnitFull = 'gallons'
		prevUnitFull = 'liters'
		break
	case 'lbs':
		newNum = num * 0.453592
		newUnit = 'kg'
		newUnitFull = 'kilograms'
		prevUnitFull = 'pounds'
		break
	case 'kg':
		newNum = num / 0.453592
		newUnit = 'lbs'
		newUnitFull = 'pounds'
		prevUnitFull = 'kilograms'
		break
	case 'mi':
		newNum = num * 1.60934
		newUnit = 'km'
		newUnitFull = 'kilometers'
		prevUnitFull = 'miles'
		break
	case 'km':
		newNum = num / 1.60934
		newUnit = 'mi'
		newUnitFull = 'miles'
		prevUnitFull = 'kilometers'
		break
	default:
		console.log('No valid unit.')
	}

	var answer =
		num + ' ' + prevUnitFull + ' converts to ' + newNum + ' ' + newUnitFull

	res.render('conversions', {
		num,
		unit,
		newNum,
		newUnit,
		answer
	})
}
