import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { fetchError, fetchSuccess } from './actions'
import { ExpensesActionTypes, IExpense } from './types'


const expenseSample1: IExpense = {
    account: 135,
    amount: 1231231,
    approved: false,
    category: "Alkohol",
    id: 2,
    notes: "notes",
    tranactionDate: "2019-01-01",
    transactionBankType: "type",
    transactionDetails: "detials",
    transactionType: "trasnaction type"
  };

  const expenseSample2: IExpense = {
    account: 132,
    amount: 1231231,
    approved: false,
    category: "Transport",
    id: 2,
    notes: "notes",
    tranactionDate: "2019-01-01",
    transactionBankType: "type",
    transactionDetails: "detials",
    transactionType: "trasnaction type"
  };
  
function* handleFetch() {
  try {
    const res = {
        error: "",
        payload :[expenseSample1,expenseSample2]
    };

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res.payload))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(ExpensesActionTypes.FETCH_EXPENSES, handleFetch)
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* expensesSaga() {
  yield all([fork(watchFetchRequest)])
}

export default expensesSaga