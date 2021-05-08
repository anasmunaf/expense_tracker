/** @format */

import React, { useState, useContext, useEffect } from "react";
import { ValueContext } from "../context/GlobalState";
import "../App.css";

function sum(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

const Balance = () => {
  const { transaction } = useContext(ValueContext);
  let [balnc, setBalnc] = useState(0);

  useEffect(() => {
    setBalnc(sum(transaction.map((arr) => arr.amount)));
  }, [transaction]);
  return (
    <div className='Balnc'>
      <p>Your Balance</p>
      <p style={{ fontSize: "2em" }}>${balnc}</p>
    </div>
  );
};
export default Balance;
