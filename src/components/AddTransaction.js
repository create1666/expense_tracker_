import React, { useState } from "react";

const FormAddTransaction = () => {
   const [input, setInputValue] = useState({
     text: "",
     number:  ""
   })
  const handleInputData = (e) => {
        setInputValue({
          ...input,
          [e.target.name]: e.target.value
        })

  }

   console.log('newObjects', input)

  const handleFormSubmit = (e) => {
       e.preventDefault()
      //  handleInputData(input)
  }
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

export default FormAddTransaction