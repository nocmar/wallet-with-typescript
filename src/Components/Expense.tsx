import 'bootstrap/dist/css/bootstrap.min.css'; 
import * as React from "react";
import ExpenseRow, { IExpense } from './ExpenseRow';
import NewExpense from './NewExpense';
export interface IProps {
  expenses: IExpense[];
}
export default class Expenses extends React.Component<IProps>{
    public render(){
       const rows = this.props.expenses.map((expense)=>{
         return <ExpenseRow expense={expense} key={expense.id}/>
       });
      
  return (
    <div>
      <NewExpense/>
        <table className="table table-hover table-outline mb-0 hidden-sm-down">
          <thead className="thead-default">
            <tr>
              <th className="text-center"><i className="fa fa-calendar"/>></th>
              <th>Amount</th>
              <th className="text-center">Detials</th>
              <th>Category</th>
              <th className="text-center">Payment Type</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
  );
    }
};
