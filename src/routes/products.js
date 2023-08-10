const express = require('express');
const {detail, add, edit, create} = require('../controllers/productsController');

const router = express.Router();


/* /products */

router.get('/detail/:id', detail)
router.get('/add', add)
router.post('/add', create)
router.get('/edit', edit)


module.exports = router