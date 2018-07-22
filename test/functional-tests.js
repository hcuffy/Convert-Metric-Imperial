const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert

const server = require('../server')
chai.use(chaiHttp)

describe('Testing functions', function ()   {
	it('convert liters to gallons', function(done)   {
		chai.request(server)
			.get('/api/convert')
			.query({ data: '34l' })
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})
	it('convert fraction liters to gallons', function(done)   {
		chai.request(server)
			.get('/api/convert')
			.query({ data:'3/4l' })
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

	it('convert deciment kilometers to miles', function(done)   {
		chai.request(server)
			.get('/api/convert')
			.query({ data:'3.5km' })
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

	it('convert franction-decimal gallon to liters', function(done)   {
		chai.request(server)
			.get('/api/convert')
			.query({ data:'3.4/3.5gal' })
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})
})
