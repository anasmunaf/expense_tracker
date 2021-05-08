/** @format */

import React, { useContext } from "react";
import Tiles from "./tile";
import { ValueContext } from "../context/GlobalState";

import "../App.css";

const History = () => {
  const { transaction } = useContext(ValueContext);
  return (
    <div>
      <p className='logoHistory'>HISTORY</p>
      <div>
        {transaction.map((arr) => {
          return (
            <div key={arr.id}>
              <Tiles id={arr.id} notes={arr.text} value={arr.amount} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
