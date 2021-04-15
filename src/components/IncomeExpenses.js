import React, { useContext } from "react";
import { AppContext } from "../App";

const calculateIncome = (bills) =>
  bills
    .filter((bill) => bill.number >= 0)
    .reduce((acc, curr) => acc + Number.parseFloat(curr.number), 0);

const calculateExpenses = (bills) =>
  bills
    .filter((bill) => bill.number < 0)
    .reduce((acc, curr) => acc +Number.parseFloat(curr.number), 0);

const IncomeExpenses = () => {
  const { bills } = useContext(AppContext);
  const income = calculateIncome(bills);
  const expenses = calculateExpenses(bills)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
