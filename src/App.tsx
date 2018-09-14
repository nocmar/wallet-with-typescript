import "bootstrap/dist/css/bootstrap.min.css";
import * as moment from "moment";
import * as React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import "./App.css";
import Expenses from "./Components/Expense";
import { IExpense } from "./Components/ExpenseRow";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import * as expenseAction from "./Expenses/actions";
import { IApplicationState } from "./store";
import "./styles/styles.css";

interface IProps{
  data: IExpense[],
  error: string,
  fetchRequest: typeof expenseAction.fetchExpenses
}
class App extends React.Component<IProps> {
  constructor(props:IProps){
    super(props);
    this.props.fetchRequest();
  }
  public render() {
    const currentDate = moment();
    // tslint:disable-next-line:no-console
    console.log(currentDate);
    return (
      <div className="App">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="main">
            <div className="container-fluid">
              <Expenses expenses={this.props.data} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ expenses }: IApplicationState) => ({
  data: expenses.expenses,
  errors: expenses.error
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(expenseAction.fetchExpenses())
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
