const UserSchema = require('../models/Users');
const bcrypt = require('bcryptjs');
const newUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // ? validated the fields before storing
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

    // * hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);

    // * save a new user to the database
    const newUser = new UserSchema({
      name,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    // ! don't send the error on the frontend for security reasons
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { newUsers };
