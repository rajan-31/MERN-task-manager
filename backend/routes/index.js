const express = require('express')
const router = express.Router()

// temporary route to check status of backend
router.get('/status', (req, res) => {
	res.json({
		message: 'Ok',
	})
})

module.exports = router
