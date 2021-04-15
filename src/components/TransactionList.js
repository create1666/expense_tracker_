import React from "react";
import Transaction from "./Transaction";

 const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {[].map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};


export default TransactionList