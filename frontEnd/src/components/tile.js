/** @format */

import React, { useContext } from "react";
import { ValueContext } from "../context/GlobalState";
import "../App.css";

const Tiles = (props) => {
  const { deleteTransaction } = useContext(ValueContext);
  let { id, notes, value } = props;
  return (
    <div style={{ marginBottom: "1em" }}>
      <button onClick={() => deleteTransaction(id)} className='btn-del'>
        X
      </button>
      <div className={`tile ${value > 0 ? "plus" : "minus"}`}>
        <span>{notes}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Tiles;
