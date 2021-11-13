/** @format */

import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
const initialState = {
  transaction: [],
};
export const ValueContext = createContext(initialState);

export const ValueProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransaction() {
    const getTrans = await axios.get(
      "http://localhost:4000/api/v1/transactions/",
    );
    dispatch({ type: "GET", payload: getTrans.data.transaction });
  }

  async function newTransaction(newTrans) {
    const addTrans = await axios.post(
      "http://localhost:4000/api/v1/transactions/",
      {
        text: newTrans.text,
        amount: newTrans.amount,
      },
    );
    dispatch({ type: "ADD", payload: addTrans.data.transaction });
  }
  async function deleteTransaction(id) {
    const delTrans = await axios.delete(
      `http://localhost:4000/api/v1/transactions/${id}`,
    );
    dispatch({ type: "DELETE", payload: delTrans.data.transaction._id });
  }
  useEffect(() => {
    getTransaction();
  }, [initialState.transaction]);
  return (
    <ValueContext.Provider
      value={{
        transaction: state.transaction,
        getTransaction,
        newTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
