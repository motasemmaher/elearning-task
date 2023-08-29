const express = require('express')
const courseRoutes = require('./course');
const router = express.Router()

router.use('/course', courseRoutes)

module.exports = router;