import 'bootstrap/dist/css/bootstrap.min.css'; 
import * as moment from 'moment'; 
import * as React from "react";
import * as reactstrap from 'reactstrap';
import "./App.css";
import Expenses from "./Components/Expense";
import { IExpense } from './Components/ExpenseRow';

const expenseSample: IExpense ={
  account: 132,
  amount: 1231231,
  approved: false,
  category: "kategoria",
  id: 2,
  notes: "notes",
  transactionBankType: "type",
  // tslint:disable-next-line:object-literal-sort-keys
  tranactionDate: "2019-01-01",
  transactionDetails: "detials",
  transactionType: "trasnaction type" 
}

class App extends React.Component {
  
  public render() {
    const currentDate = moment();
    // tslint:disable-next-line:no-console
    console.log(currentDate);
    return (
      <div className="App">
       <reactstrap.Button color="danger">Danger!</reactstrap.Button>
          <Expenses expenses={[expenseSample]} />
      </div>
    );
  }
}

export default App;
