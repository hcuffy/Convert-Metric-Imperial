const express = require('express')
const router = express.Router()
const convertController = require('../controllers/conversions')

router.get('/api/convert', convertController.makeConversion)
router.get('/', (req, res) => {
	res.render('index')
})

module.exports = router
