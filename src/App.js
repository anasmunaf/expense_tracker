/** @format */
import React from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpense from "./components/incomeExpense";
import History from "./components/history";
import AddTransaction from "./components/addTransaction";
import { ValueProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <ValueProvider>
      <div className='App'>
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </ValueProvider>
  );
}

export default App;
