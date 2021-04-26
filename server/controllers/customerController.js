const CustomerSchema = require('../models/Customers');
const auth = require('../middleware/auth');

const saveCustomer = async (req, res) => {
  const { name } = req.body;
  try {
    const newCustomer = new CustomerSchema({
      name,
    });
    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getCustomer = async (req, res) => {
  try {
    const customers = await CustomerSchema.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { saveCustomer, getCustomer };
