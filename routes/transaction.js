/** @format */

const express = require("express");
const {
  getTransaction,
  postTransaction,
  deleteTransaction,
} = require("../controllers/transaction.js");

const router = express.Router();

router.route("/").get(getTransaction).post(postTransaction);
router.route("/:id").delete(deleteTransaction);

module.exports = router;
