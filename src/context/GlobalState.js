/** @format */

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transaction: [],
};
export const ValueContext = createContext(initialState);

export const ValueProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  function newTransaction(newTrans) {
    dispatch({ type: "ADD", payload: newTrans });
  }
  function deleteTransaction(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  return (
    <ValueContext.Provider
      value={{
        transaction: state.transaction,
        newTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
