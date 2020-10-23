const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json({ message: 'Welcome to the API for the Node DB 4 Project!' })
	} catch (err) {
		next(err)
	}
})

module.exports = router;