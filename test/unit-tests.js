const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const server = require('../server')
chai.use(chaiHttp)
const jsdom = require('jsdom')
const { JSDOM } = jsdom


describe('Unit Tests', () =>  {
it('whole number input should work', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '34km' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let output = dom.window.document.body.querySelector('h4').textContent
			assert.equal(res.status, 200)
			assert.equal(output , 'Results: 34 kilometers converts to 21.12667304609343 miles')
			done()
		})
})

it('decimal input should work', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '3.4l' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let output = dom.window.document.body.querySelector('h4').textContent
			assert.equal(res.status, 200)
			assert.equal(output , 'Results: 3.4 liters converts to 0.8981854013171624 gallons')
			done()
		})
})

it('fractional input should work', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '1/18mi' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
 		let output = dom.window.document.body.querySelector('h4').textContent
 		assert.equal(res.status, 200)
 		assert.equal(output , 'Results: 0.05555555555555555 miles converts to 0.08940777777777777 kilometers')
			done()
		})
})

it('fractional decimals should work', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '23.7/1.2km' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let output = dom.window.document.body.querySelector('h4').textContent
			assert.equal(res.status, 200)
			assert.equal(output , 'Results: 19.75 kilometers converts to 12.272111548833683 miles')
			done()
		})
})

it('invalid fraction should should not work)', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '3//7gal' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let output = dom.window.document.body.querySelector('h4').textContent
			assert.equal(res.status, 200)
			assert.equal(output , 'Results: Invalid Unit OR Number')
			done()
		})
})

it('no numerical input should work', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'km' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let output = dom.window.document.body.querySelector('h4').textContent
			assert.equal(res.status, 200)
			assert.equal(output , 'Results: 1 kilometers converts to 0.6213727366498067 miles')
			assert.equal(res.status, 200)
			done()
		})
})

it('invalid unit should not work', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'rd' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let output = dom.window.document.body.querySelector('h4').textContent
			assert.equal(output , 'Results: Invalid Unit')
			assert.equal(res.status, 200)
			done()
		})
})

it('gal to l', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'gal' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let expected = 'Returned Unit: l'
			let output = dom.window.document.body.querySelector('#returnedUnit').textContent
			assert.equal(output , expected)
			assert.equal(res.status, 200)
			done()
		})
})

it('l to gal', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'l' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let expected = 'Returned Unit: gal'
			let output = dom.window.document.body.querySelector('#returnedUnit').textContent
			assert.equal(output , expected)
			assert.equal(res.status, 200)
			done()
		})
})

it('km to mi', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'km' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let expected = 'Returned Unit: mi'
			let output = dom.window.document.body.querySelector('#returnedUnit').textContent
			assert.equal(output , expected)
			assert.equal(res.status, 200)
			done()
		})
})

it('mi to km', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'mi' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let expected = 'Returned Unit: km'
			let output = dom.window.document.body.querySelector('#returnedUnit').textContent
			assert.equal(output , expected)
			assert.equal(res.status, 200)
			done()
		})
})

it('kg to lbs', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'kg' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let expected = 'Returned Unit: lbs'
			let output = dom.window.document.body.querySelector('#returnedUnit').textContent
			assert.equal(output , expected)
			assert.equal(res.status, 200)
			done()
		})

	it('lbs to kg', (done)  =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data: 'lbs' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let expected = 'Returned Unit: kg'
				let output = dom.window.document.body.querySelector('#returnedUnit').textContent
				assert.equal(output , expected)
				assert.equal(res.status, 200)
				done()
			})
	})

})
it('pass nothing should not work', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: null })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
 			let output = dom.window.document.body.querySelector('span').textContent
			assert.equal(output , 'Invalid Unit')
			assert.equal(res.status, 200)
			done()
		})
})

it('LBS to KG', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '2LBS' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let expectedUnit = 'Returned Unit: kg'
			let expectedNum = 'Returned Number: 0.907184'
			let outputUnit = dom.window.document.body.querySelector('#returnedUnit').textContent
			let outputNum  = dom.window.document.body.querySelector('#returnedNumber').textContent
			assert.equal(outputUnit , expectedUnit)
			assert.equal(outputNum , expectedNum)
			assert.equal(res.status, 200)
			done()
		})
})

it('KG to LBS', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '2KG' })
		.end((err, res) => {
			const dom = new JSDOM(res.text)
			let expectedUnit = 'Returned Unit: lbs'
			let expectedNum = 'Returned Number: 4.409248840367555'
			let outputUnit = dom.window.document.body.querySelector('#returnedUnit').textContent
			let outputNum  = dom.window.document.body.querySelector('#returnedNumber').textContent
			assert.equal(outputUnit , expectedUnit)
			assert.equal(outputNum , expectedNum)
			assert.equal(res.status, 200)
			done()
		})
})

	it('MI to KM', (done)  =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data: '2MI' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let expectedUnit = 'Returned Unit: km'
				let expectedNum = 'Returned Number: 3.21868'
				let outputUnit = dom.window.document.body.querySelector('#returnedUnit').textContent
				let outputNum  = dom.window.document.body.querySelector('#returnedNumber').textContent
				assert.equal(outputUnit , expectedUnit)
				assert.equal(outputNum , expectedNum)
				assert.equal(res.status, 200)
				done()
			})
	})

	it('KM to MI', (done)  =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data: '2KM' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let expectedUnit = 'Returned Unit: mi'
				let expectedNum = 'Returned Number: 1.2427454732996135'
				let outputUnit = dom.window.document.body.querySelector('#returnedUnit').textContent
				let outputNum  = dom.window.document.body.querySelector('#returnedNumber').textContent
				assert.equal(outputUnit , expectedUnit)
				assert.equal(outputNum , expectedNum)
				assert.equal(res.status, 200)
				done()
			})
	})




	it('GAL to L', (done)  =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data: '2GAL' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let expectedUnit = 'Returned Unit: l'
				let expectedNum = 'Returned Number: 7.57082'
				let outputUnit = dom.window.document.body.querySelector('#returnedUnit').textContent
				let outputNum  = dom.window.document.body.querySelector('#returnedNumber').textContent
				assert.equal(outputUnit , expectedUnit)
				assert.equal(outputNum , expectedNum)
				assert.equal(res.status, 200)
				done()
			})
	})

	it('L to GAL', (done)  =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data: '2L' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let expectedUnit = 'Returned Unit: gal'
				let expectedNum = 'Returned Number: 0.5283443537159779'
				let outputUnit = dom.window.document.body.querySelector('#returnedUnit').textContent
				let outputNum  = dom.window.document.body.querySelector('#returnedNumber').textContent
				assert.equal(outputUnit , expectedUnit)
				assert.equal(outputNum , expectedNum)
				assert.equal(res.status, 200)
				done()
			})
	})






})
