import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import FormAddTransaction from "./components/AddTransaction"
import GlobalData  from "./ContextData"

function App() {

    const {provider} = GlobalData
    const [] 
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
