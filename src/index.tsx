import { createHashHistory } from 'history'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Expenses from './Components/Expense';
import { IExpenseState } from './Expenses/types';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { IApplicationState } from './store'

// TODO remove it from here
const initialState: IExpenseState = {
  error: '',
  expenses: [],
  fetched: false,
  fetching: false
}

const initalReduxState:IApplicationState={
  expenses: initialState
}
const history = createHashHistory()


const store = configureStore(history, initalReduxState)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/list" component={Expenses} />
      </div>
</BrowserRouter>


</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
