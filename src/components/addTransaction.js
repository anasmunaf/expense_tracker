/** @format */

import React, { useState, useContext } from "react";
import { ValueContext } from "../context/GlobalState";
import "../App.css";

const AddTransaction = () => {
  let [text, setText] = useState();
  let [amount, setAmount] = useState(0);
  const { newTransaction } = useContext(ValueContext);

  const onSubmit = (e) => {
    e.preventDefault();
    let transaction = {
      id: Math.floor(Math.random() * 1000) + 1,
      text,
      amount: Number(amount),
    };
    newTransaction(transaction);
    console.log("submit");
  };

  return (
    <div>
      <p className='logoHistory'>ADD TRANSACTION</p>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='transactionData' className='form-label'>
            TEXT
          </label>
          <input
            type='text'
            className='form-control'
            id='transactionData'
            required
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='trasactionAmount' className='form-label'>
            Amount
          </label>
          <input
            type='number'
            className='form-control'
            id='trasactionAmount'
            required
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className='btn btn-primary'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
