import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import IncomeExpenses from "./components/IncomeExpenses";

export const AppContext = createContext({})
const { Provider } = AppContext

function App() {
  const [bills, setBills] = React.useState([]);
  console.log(bills)
  const deleteTransaction = (id) => {
    const filteredBills = bills.filter(bill => bill.id !== id)
    setBills(filteredBills)
  }
  return (
    <Provider value={{bills, setBills, deleteTransaction}}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
