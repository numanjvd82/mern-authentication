const router = require('express').Router();
const {
  newUsers,
  logUsersIn,
  logUsersOut,
} = require('../controllers/userController');

router.post('/auth/register', newUsers);
router.post('/auth/login', logUsersIn);
router.get('/auth/logout', logUsersOut);

module.exports = router;
