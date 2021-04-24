import React, { useContext } from "react";
import GlobalData from "../contextData";
// balance = total income + total expense
const Balance = () => {
  const contextData = useContext(GlobalData);
  const [incExcData, setincExcData] = contextData;
  // const localData = JSON.parse( localStorage.getItem('transactions'))
  const calcIncExBalance = incExcData.reduce(
    (acc, item) => acc + parseFloat(item.number),
    0
  );

  const handleReset = () => {
    setincExcData([]);
    localStorage.setItem("transactions", JSON.stringify([]));
  };

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={calcIncExBalance < 0 ? "money minus" : "money plus"}>
        {calcIncExBalance < 0 ? "-" : ""}$
        {calcIncExBalance.toString().replace("-", "")}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Balance;
