import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import FormAddTransaction from "./components/AddTransaction";
import GlobalData from "./contextData";
import { useState } from "react";

function App() {
  const { Provider } = GlobalData;
  const data = JSON.parse(localStorage.getItem('transactions'))
  const [incExcData, setincExcData] = useState(data || []);
 


  return (
    <>
    <Provider value = {[incExcData, setincExcData]}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <FormAddTransaction />
      </div>
      </Provider>
    
    </>
  );
}

export default App;
