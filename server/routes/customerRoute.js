const router = require('express').Router();

const auth = require('../middleware/auth');
const { saveCustomer } = require('../controllers/customerController');

router.post('/', auth, saveCustomer);

module.exports = router;
