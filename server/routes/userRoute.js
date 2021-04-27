const router = require('express').Router();
const {
  newUsers,
  logUsersIn,
  logUsersOut,
  isLoggedIn,
} = require('../controllers/userController');

router.post('/auth/register', newUsers);
router.post('/auth/login', logUsersIn);
router.get('/auth/logout', logUsersOut);
router.get('/loggedIn', isLoggedIn);

module.exports = router;
