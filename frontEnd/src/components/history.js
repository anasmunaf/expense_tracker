/** @format */

import React, { useContext, useEffect } from "react";
import Tiles from "./tile";
import { ValueContext } from "../context/GlobalState";

import "../App.css";

const History = () => {
  const { transaction, getTransaction } = useContext(ValueContext);
  return (
    <div>
      <p className='logoHistory'>HISTORY</p>
      <div>
        {transaction.map((arr) => {
          return (
            <div key={arr._id}>
              <Tiles id={arr._id} notes={arr.text} value={arr.amount} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
