import React, { useContext } from "react";

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$4000</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">$6000</p>
      </div>
    </div>
  );
};

export default IncomeExpenses
