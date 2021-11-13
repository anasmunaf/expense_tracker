/** @format */

import React, { useContext } from "react";
import { ValueContext } from "../context/GlobalState";
import "../App.css";

function sum(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}
const IncomeExpense = () => {
  const { transaction } = useContext(ValueContext);
  let income = 0;
  let expense = 0;
  income = sum(transaction.map((arr) => (arr.amount > 0 ? arr.amount : 0)));
  expense = sum(transaction.map((arr) => (arr.amount < 0 ? arr.amount : 0)));
  expense = Math.abs(expense);
  return (
    <div>
      <table className='InEx'>
        <thead>
          <tr>
            <th className='clr'>INCOME</th>
            <th>EXPENSE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='clr' style={{ color: "green" }}>
              {income}
            </td>
            <td style={{ color: "red" }}>{expense}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IncomeExpense;
