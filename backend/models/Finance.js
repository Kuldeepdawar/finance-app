// Mongoose model for finance application
const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
  personalDetails: { name: String, age: Number },
  income: Number,
  expenses: Number,
  assets: Number,
  liabilities: Number,
});

module.exports = mongoose.model("Finance", financeSchema);
