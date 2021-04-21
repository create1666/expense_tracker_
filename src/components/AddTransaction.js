import React, { useState, useContex} from "react";
import { v4 } from "uuid";
import GlobalData from "../contextData"


const FormAddTransaction = () => {

  const contexData =  useContext(GlobalData)
  const[incExcData, setincExcData] = contexData

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
       const newGlobalData = {
         ...input,
         id: v4()
       }
     
       setincExcData([...incExcData,  newGlobalData ])

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