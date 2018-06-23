const express = require('express');
const router = express.Router();

router.get('/', (err, req, res, next) => {
	res.render('index');
});

module.exports = router;
