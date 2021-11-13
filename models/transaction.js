/** @format */

const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  text: {
    required: [true, "Please add text details regarding the amount"],
    type: String,
    trim: true,
  },
  amount: {
    required: [true, "Please the amount value "],
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const transaction = mongoose.model("Transaction", transactionSchema);

module.exports = transaction;
