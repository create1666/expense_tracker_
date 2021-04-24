import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import GlobalData from "../contextData";

const FormAddTransaction = () => {
  const contexData = useContext(GlobalData);
  const [incExcData, setincExcData] = contexData;

  const initialFormInputState = {
    text: "",
    number: "",
  };
  const [input, setInputValue] = useState(initialFormInputState);
  const handleInputData = (e) => {
    setInputValue({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  console.log("newObjects", input);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newGlobalData = {
      ...input,
      id: v4(),
    };

    setincExcData([...incExcData, newGlobalData]);
    setInputValue(initialFormInputState);
    // set local storage
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions = [...transactions, newGlobalData];
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            onChange={handleInputData}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="number"
            placeholder="Enter amount..."
            onChange={handleInputData}
          />
        </div>
        <button className="btn" onClick={handleFormSubmit}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default FormAddTransaction;
