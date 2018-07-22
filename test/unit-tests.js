
const chai = require('chai')
const assert = require('chai').assert
const Validation = require('../controllers/conversions').makeConversion




describe('Unit Tests', () =>  {
	it('test', (done)  =>  {
		let result = Validation({ data:'34k' })
		console.log(result)
		assert.equal(result,10)
		done()

	})





})
