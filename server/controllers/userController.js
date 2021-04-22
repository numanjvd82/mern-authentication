const UserSchema = require('../models/Users');

const getUsers = async (req, res) => {
  try {
    const fetchUsers = await UserSchema.find();
    res.status(200).json(fetchUsers);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports = { getUsers };
