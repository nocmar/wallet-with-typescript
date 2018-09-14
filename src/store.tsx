import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from 'history';
import { applyMiddleware, createStore, Store } from "redux";
import { Action, AnyAction, combineReducers, Dispatch } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { expenseReducer } from "./Expenses/reducer";
import expenseSaga from "./Expenses/saga";
import { IExpenseState } from "./Expenses/types";

export interface IApplicationState {
  expenses: IExpenseState;
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<IApplicationState>({
  expenses: expenseReducer
});

export function* rootSaga() {
  yield all([fork(expenseSaga)]);
}
export default function configureStore(
  history: History,
  initialState: IApplicationState
): Store<IApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})
  // create the redux-saga middleware
  const sagamidl = createSagaMiddleware()

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagamidl))
  )

  // Don't forget to run the root saga, and return the store object.
  sagamidl.run(rootSaga)
  return store
}
