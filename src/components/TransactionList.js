import React, { useContext } from "react";
import Transaction from "./Transaction";
import { AppContext } from "../App";

const TransactionList = () => {
  const { bills, deleteTransaction } = useContext(AppContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {bills.map((transaction) => (
          <li key={transaction.id} className={transaction.number < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>{transaction.number < 0 ? '-' : '+'} ${transaction.number}</span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-btn"
            >
              x
            </button>
          </li>
          // <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
