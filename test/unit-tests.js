const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const server = require('../server')
chai.use(chaiHttp)



describe('Unit Tests', () =>  {
it('Wrong unit should be detected', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '34k' })
		.end((err, res) => {
			assert.equal(res.status, 200)
			done()
		})
})

it('No number should be detected', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: 'k' })
		.end((err, res) => {
			assert.equal(res.status, 200)
			done()
		})
})

it('Invalid number and unit', (done)  =>  {
	chai.request(server)
		.get('/api/convert')
		.query({ data: '$kuii' })
		.end((err, res) => {

			assert.equal(res.status, 200)
			done()
		})
})

	it('decimal fraction test', (done)  =>  {
		chai.request(server)
			.get('/api/convert')
			.query({ data: '23.7/1.2km' })
			.end((err, res) => {

				assert.equal(res.status, 200)
				done()
			})
	})
})
