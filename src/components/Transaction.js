import React, { useContext } from "react";

const Transaction = ({ transaction }) => {
  return (
    <li className={true ? "minus" : "plus"}>
      Hello
      <span>
        + $5000
      </span>
      <button
        // onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction
