import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
// import AddTransaction from "./components/AddTransaction";
import IncomeExpenses from "./components/IncomeExpenses";
import FormAddTransaction from "./components/AddTransaction"

function App() {

    
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <FormAddTransaction />
      </div>
    </>
  );
}

export default App;
