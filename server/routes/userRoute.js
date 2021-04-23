const router = require('express').Router();
const { newUsers } = require('../controllers/userController');

router.post('/auth', newUsers);

module.exports = router;
