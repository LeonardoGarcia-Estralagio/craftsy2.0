const express = require('express');
const router = express.Router();

const indexcontroller = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexcontroller.index);

module.exports = router;
