import {action} from 'typesafe-actions';
import {ExpensesActionTypes,IExpense} from './types';

export const fetchExpenses =()=>action(ExpensesActionTypes.FETCH_EXPENSES)
export const fetchSuccess = (data: IExpense[]) => action(ExpensesActionTypes.FETCH_EXPENSES_FULFILLED, data)
export const fetchError  = (message:string) =>action(ExpensesActionTypes.FETCH_EXPENSES_REJECTED,message)
export const addExpense = ()=> action(ExpensesActionTypes.ADD_EXPENSE_SUCCESS)