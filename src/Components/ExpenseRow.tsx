import 'bootstrap/dist/css/bootstrap.min.css'; 
import * as React from "react";

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
interface IProps{
    expense:IExpense
}
export default class ExpenseRow extends React.Component<IProps>{
    constructor(props:any) {
        super(props);
    this.state ={
        modalIsOpenp:false
    };
    }

    public render(){
        const approved = (this.props.expense.approved);
        const expenseState = this.props.expense.approved ? "approved-expense" : "notapproved-expense";

          return(
            <tr className={expenseState}>
            <td className="text-center">
              <div>{new Date(this.props.expense.tranactionDate).toLocaleDateString()}</div>
            </td>
            <td>
              <div>{this.props.expense.amount}</div>
            </td>
            <td className="text-center">
              <div>{this.props.expense.transactionDetails}</div>
              <div className="small text-muted">
                <span>Notes</span> | {this.props.expense.notes}
              </div>
            </td>
            <td>
              <div className="clearfix">
                <div className="float-left">
                {!approved && 
                  <select value={this.props.expense.category} onChange={this.handleCategoryChange} className="form-control">
                    <option value=''>Wybierz...</option>
                    <option value="Spożywcze">Spożywcze</option>
                    <option value="Alkohol">Alkohol</option>
                    <option value="Samochód">Samochód</option>
                    <option value="Transport">Transport</option>
                    <option value="Mieszkanie">Mieszkanie</option>
                  </select>}
                  {approved && <div>{this.props.expense.category}</div>
    
                  }
                </div>
    
              </div>
            </td>
            <td className="text-center">
              <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}/>
            </td>
            <td>
            
              {!approved && <i className="fa fa-thumbs-up icon-table" onClick={this.handleClick}/>}
              <i className="fa fa-trash icon-table" onClick = {this.handleDelete}/>
              <i className="fa fa-bars icon-table" onClick={this.openModal}/>
            
            </td>
          </tr>
          );
      }

    private openModal() {
        this.setState({ modalIsOpen: true });
      }
    /* private closeModal() {
    //     this.setState({ modalIsOpen: false });
    //   }*/
      private handleCategoryChange(){
          // tslint:disable-next-line:no-console
          console.log("handleCategoryChange");
      }
      private handleClick(){
        // tslint:disable-next-line:no-console
        console.log("handeleClick");
        // this.props.acceptExpense(this.props.expense);
      }
      private handleDelete(){
        // tslint:disable-next-line:no-console
        console.log("handeleClick");
        // this.props.acceptExpense(this.props.expense);
      }
}