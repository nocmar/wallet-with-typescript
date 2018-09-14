import { createStore } from "redux";
import { Action, AnyAction, combineReducers, Dispatch } from 'redux'
import { expenseReducer } from "./Reducers/expensesReducer";
import { IExpenseState } from "./Reducers/types";

export interface IApplicationState {
  expenses: IExpenseState;
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
  }
  
export const rootReducer = combineReducers<IApplicationState>({
    expenses: expenseReducer
  })

export default createStore(expenseReducer);
