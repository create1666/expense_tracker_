import React, { useState } from "react";

const AddTransaction = () => {

  const [input, setInput] = useState({
    number: "",
    text: ""
  })

  const setInputValue = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setInputValue(input)
    console.log(input, 'nput')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name='text' onChange={setInputValue} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" name='number' placeholder="Enter amount..." onChange= {setInputValue}/>
        </div>
        <button className="btn" onClick= {handleSubmit}>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
