/** @format */
const { object } = require("joi");
const transaction = require("../models/transaction");
const getTransaction = async (req, res, next) => {
  try {
    const getTrans = await transaction.find();
    return res.status(200).json({
      success: true,
      count: getTrans.length,
      transaction: getTrans,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: `Error: ${err}`,
    });
  }
};
const postTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const addTrans = await transaction.create(req.body);
    return res.status(201).json({
      success: true,
      count: addTrans.length,
      transaction: addTrans,
    });
  } catch (err) {
    console.log(Object.values(err.errors).map((arr) => arr.message));
    return res.status(400).json({
      success: false,
      error: `Error: ${Object.values(err.errors).map((arr) => arr.message)}`,
    });
  }
};
const deleteTransaction = async (req, res, next) => {
  try {
    const delTrans = await transaction.findById(req.params.id);
    console.log(delTrans);
    if (delTrans) {
      await transaction.deleteOne();
      return res.status(200).json({
        success: true,
        count: delTrans.length,
        transaction: delTrans,
      });
    } else {
      return res.status(201).json({
        success: false,
        Error: "Not found ",
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
};
module.exports = {
  getTransaction,
  postTransaction,
  deleteTransaction,
};
