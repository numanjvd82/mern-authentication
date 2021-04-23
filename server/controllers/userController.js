const UserSchema = require('../models/Users');
const newUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ errorMsg: 'Please enter all the required fields' });
    }
    if (password.length < 6) {
      return res.status(400).json({
        errorMsg: 'Please enter a password with at least 6 characters',
      });
    }
    const existingUser = await UserSchema.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({
        errorMsg: 'Email already registered',
      });
    }
  } catch (error) {
    // ! don't send the error on the frontend for security reasons
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { newUsers };
