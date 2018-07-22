const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const conversions = require('../controllers/conversions')


// describe('Testing functions', () =>  {
// 	it('Get all closed all closed Issues', (done) =>  {
// 		chai.request(server)
// 			.get('/issues/All')
// 			.query({ project:'FCC', filter:'on' })
// 			.end((err, res) => {
// 				assert.equal(res.status, 200)
// 				done()
// 			})
// 	})
// })
