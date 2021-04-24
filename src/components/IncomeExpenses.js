import React, { useContext, useState } from "react";
import GlobalData from "../contextData";

const IncomeExpenses = () => {
  const dataP = useContext(GlobalData);
  const [incExcData, setincExcData] = dataP;

 const calcInc  = incExcData.filter((item) => item.number > 0 ).reduce((acc, item) => acc + parseInt(item.number) , 0)
 console.log ('output',calcInc )
  const calcIncExp = () => incExcData.reduce((acc, currItem, index, arr) => {
        if(currItem.number < 0) {
           return {
             income: acc.income,
             expense: acc.expense + parseFloat(currItem.number.replace('-', ''))
           }
        } else {
          return {
            income: acc.income + parseFloat(currItem.number),
            expense: acc.expense
          }
        }
  }, {
    income: 0,
    expense: 0,
  }); 

  const calcIncExpe = calcIncExp()
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{calcInc > 0 ? '+': ''}${ calcInc }</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{calcIncExpe.expense > 0 ? '-': ''}${calcIncExpe.expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
