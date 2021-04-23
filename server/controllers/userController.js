const UserSchema = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ? register user
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
    if (existingUser) {
      return res.status(400).json({
        errorMsg: 'Email already registered',
      });
    }

    // * hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // * save a new user to the database
    const newUser = new UserSchema({
      name,
      email,
      passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(200);

    // ! sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );
    console.log(token);

    // ! send the token in a http only cookie
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();
  } catch (error) {
    // ! don't send the error on the frontend for security reasons
    res.status(500).json({ msg: error.message });
  }
};

const logUsersIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // * validating
    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMsg: 'Please enter all the required fields' });
    }

    // ? checking if the user exists in db by email
    const existingUser = await UserSchema.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ errorMsg: 'Wrong email or password' });
    }
    const correctPassword = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!correctPassword) {
      return res.status(401).json({ errorMsg: 'Wrong email or password' });
    }

    // ! sign the token
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // ! send the token in a http only cookie
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const logUsersOut = (req, res) => {
  res
    .cookie('token', '', {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
};

module.exports = { newUsers, logUsersIn, logUsersOut };
