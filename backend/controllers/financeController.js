// create logic for finance
const Finance = require("../models/Finance");

exports.createFinance = async (req, res) => {
  try {
    const newFinance = await Finance.create(req.body);
    res.status(201).json(newFinance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFinances = async (req, res) => {
  try {
    const finances = await Finance.find();
    res.status(200).json(finances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFinance = async (req, res) => {
  try {
    const updatedFinance = await Finance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedFinance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFinance = async (req, res) => {
  try {
    await Finance.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Finance application deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
