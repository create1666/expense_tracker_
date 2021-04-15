import React, { useContext } from "react";
import { AppContext } from "../App";

const calculateBalance = (bills) =>
  bills.reduce((acc, curr) => (acc + Number.parseFloat(curr.number)), 0);

const Balance = () => {
  const { bills } = useContext(AppContext);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${calculateBalance(bills)}</h1>
    </>
  );
};

export default Balance;
