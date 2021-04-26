const router = require('express').Router();

const auth = require('../middleware/auth');
const {
  saveCustomer,
  getCustomer,
} = require('../controllers/customerController');

router.post('/', auth, saveCustomer);
router.get('/', auth, getCustomer);

module.exports = router;
