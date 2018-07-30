const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const server = require('../server')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

chai.use(chaiHttp)

describe('Testing functions',  ()  => {


	it('convert 30l as a valid input should work', (done) =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data:'30l' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let output = dom.window.document.body.querySelector('h4').textContent
				assert.equal(res.status, 200)
				assert.equal(output , 'Results: 30 liters converts to 7.925165305739669 gallons')
				done()
			})
	})

	it('convert invalid input(56w) should not work', (done) =>   {
		chai.request(server)
			.get('/api/convert')
			.query({ data: '56w' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let output = dom.window.document.body.querySelector('h4').textContent
				assert.equal(res.status, 200)
				assert.equal(output , 'Results: Invalid Unit')
				done()
			})
	})
	it('Invalid number input(4/9.4.3/4kg) should not work', (done) =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data:'4/9.4.3/4kg' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let output = dom.window.document.body.querySelector('h4').textContent
				assert.equal(res.status, 200)
				assert.equal(output , 'Results: Invalid number')
				done()
			})
	})

	it('Invalid number and unit input(4/9.4.3/4w) should not work', (done) =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data:'4/9.4.3/4w' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let output = dom.window.document.body.querySelector('h4').textContent
				assert.equal(res.status, 200)
				assert.equal(output , 'Results: Invalid Unit & Number')
				done()
			})
	})

	it('conversions with no number shoul work', (done)  => {
		chai.request(server)
			.get('/api/convert')
			.query({ data:'gal' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let output = dom.window.document.body.querySelector('h4').textContent
				assert.equal(res.status, 200)
				assert.equal(output , 'Results: 1 gallons converts to 3.78541 liters')
				done()
			})
	})

})
