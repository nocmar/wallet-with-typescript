export interface IExpense{
    id: number,
    tranactionDate: string,
    transactionDetails: string,
    transactionBankType: string,
    transactionType: string,
    account: number,
    amount: number,
    approved: boolean,
    category: string,
    notes: string
}

export const enum ExpensesActionTypes{
    FETCH_EXPENSES = '@@expenses/FETCH_EXPENSES',
    FETCH_EXPENSES_REJECTED ='@@expenses/FETCH_EXPENSES_REJECTED',
    FETCH_EXPENSES_FULFILLED ='@@expenses/FETCH_EXPENSES_FULFILLED',
    ADD_EXPENSE_SUCCESS = '@@expenses/ADD_EXPENSE_SUCCESS',
    UPDATE_EXPENSE ='@@expenses/UPDATE_EXPENSE',
    DELETE_EXPENSE = '@@expenses/DELETE_EXPENSE'
}

export interface IExpenseState {
    readonly error: string,
    readonly expenses: IExpense[],
    readonly fetched: boolean,
    readonly fetching: boolean
}