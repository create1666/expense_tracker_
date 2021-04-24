import React, { useContext } from "react";
import GlobalData from "../contextData";

const TransactionList = () => {
  const contextData = useContext(GlobalData);
  const [incExcData, setincExcData] = contextData;
  const deleteTransaction = (newId ) => {
   const datat = incExcData.filter((item) => {
       return newId !== item.id
    });
    setincExcData(datat)
  localStorage.setItem('transactions',JSON.stringify(datat))
    
  };

  const newListItems = incExcData.map((item, key) => {
    return (
      <li key={key} className={item.number > 0 ? "plus" : "minus"}>
        {item.text}
        <span>{item.number < 0? "-": "+"}${item.number.replace('-', '').replace('+', '')}</span>

        <button onClick={() => deleteTransaction(item.id)}>x</button>
      </li>

      
    );
  });
  return (
    <>
      <h3>History</h3>
      <ul className="list">{newListItems}</ul>
    </>
  );
};

export default TransactionList;
