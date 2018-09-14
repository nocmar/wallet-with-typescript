import { Reducer } from "redux";
import { ExpensesActionTypes, IExpenseState } from "./types";

const initialState: IExpenseState = {
  error: '',
  expenses: [],
  fetched: false,
  fetching: false
}
const reducer: Reducer<IExpenseState> = (state = initialState, action) => {
  switch (action.type) {
    case ExpensesActionTypes.FETCH_EXPENSES: {
      return { ...state, fetching: true };
    }
    case ExpensesActionTypes.FETCH_EXPENSES_REJECTED: {
      return { ...state, fetching: false, error: action.payload };
    }
    case ExpensesActionTypes.FETCH_EXPENSES_FULFILLED: {
      return {
        ...state,
        expenses: action.payload,
        fetched: true,
        fetching: false
      };
    }
    case ExpensesActionTypes.ADD_EXPENSE_SUCCESS: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    }
    case "UPDATE_EXPENSE": {
      // const newExpense = action.payload
      const newExpenses = [...state.expenses];
      // const expensetToUpdate = newExpenses.findIndex(expense => expense.id === newExpense.id)
      // newExpenses[expensetToUpdate] = newExpense

      return {
        ...state,
        expenses: newExpenses
      };
    }
    case "DELETE_EXPENSE": {
      return {
        ...state
        // expenses: state.expenses.filter(expense => expense.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as expenseReducer };
