import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Expenses from './Components/Expense';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
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
