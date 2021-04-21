import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import FormAddTransaction from "./components/AddTransaction";
import GlobalData from "./ContextData";
import { useState } from "react";

function App() {
  const { provider } = GlobalData;
  const [incExcData, setincExcData] = useState([]);
  return (
    <>
    <provider value = {[incExcData, setincExcData]}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <FormAddTransaction />
      </div>
      </provider>
    
    </>
  );
}

export default App;
