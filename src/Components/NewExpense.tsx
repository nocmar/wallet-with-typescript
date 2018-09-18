import "bootstrap/dist/css/bootstrap.min.css";
import * as moment from "moment";
import * as React from "react";
// import DatePicker from "react-datepicker";
import { Form, Select, Text } from 'react-form';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
// import '../../../node_modules/react-datepicker/dist/react-datepicker.css';

interface IState{
    showButton: boolean,
      modalIsOpen: boolean,
      details: string,
      amount: number,
      notes: string,
      date: any,
      category: string,
      approved: boolean
}
const statusOptions = [
  {
    label: '',
    value: 'Select',
  },
  {
    label: 'Spożywcze',
    value: 'Spożywcze',
  },
  {
    label: "Transport",
    value: 'Transport',
  },
]

export default class NewExpense extends React.Component<any,IState> {
  constructor(props:any) {
    super(props);
   
    this.state ={
    amount: 0,
    approved: false,
    category: "",
    date: moment().format('LLLL'),
    details: "",
    modalIsOpen: false,
    notes: "",
    showButton: true
}
this.handleAddNewClick = this.handleAddNewClick.bind(this);
  }

  public handleInputChange(event:any) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    // tslint:disable-next-line:no-console
    console.log(value);
    // tslint:disable-next-line:no-console
    console.log(name);
    // this.setState({[name]: value});
  }

  public handleDateChange(date:any) {
    this.setState({
      date
    });
  }
  public handleAddNewClick(event:any) {
    this.setState({ showButton: false, modalIsOpen: true })
  }

  public handleOKClick(event:any) {
    // tslint:disable-next-line:no-console
    console.log("handle click");
    // const validationResult = this.form.validateAll()
    // if (Object.keys(validationResult).length === 0) {
    //   const expense = {
    //       "account": "",
    //       "amount": this.state.amount,
    //       "approved": false,
    //       "category": this.state.category,
    //       "id": Date.now(),-
    //       "notes": this.state.notes,
    //       "tranactionDate": moment(this.state.date).format('MM/DD/YYYY'),
    //       "transactionBankType": "Przelew",
    //       "transactionDetails": this.state.details,
    //       "transactionType": "Obciażenie"
    //   }
    //   this.props.addExpense(expense);

    //   this.setState({
    //     amount: 0,
    //     approved: false,
    //     category: "",
    //     date: moment(),
    //     details: "",
    //     modalIsOpen: false,
    //     notes: "",
    //     showButton: true
    //   });
    // }
  }

  public handleCancelClick(event:any) {
    this.setState({ showButton: true, modalIsOpen: false })
  }

  public render() {
    if (this.state.showButton) {
      return (
        <div className="col-lg-3">
          <button className="btn btn-success btn-lg" style={{ width: "50%" }} onClick={this.handleAddNewClick}>+ Nowy</button>
        </div>)
    }
    else {
      return (
        <Modal isOpen={this.state.modalIsOpen} className={'modal-primary'}>
          <ModalHeader>New expense</ModalHeader>
          <ModalBody>
            <Form>
        <div>
              <div className="form-group row">
                <label className="col-md-4 form-control-label">Amount*</label>
                <div className="col-md-8">
                  <div className="input-prepend input-group">
                       <Text type="number" className="form-control" style={{ width: "100%" }}name="amount" onChange={this.handleInputChange} value={this.state.amount} placeholder="Amount" />
                  </div>
                </div>
           
              </div>
              <div className="form-group row">
                <label className="col-md-4 form-control-label">Category*</label>
                <div className="col-md-8">
                  <Select name='category' options={statusOptions} value={this.state.category} className="form-control" onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-4 form-control-label">Description</label>
                <div className="col-md-8">
                  <input type="text" className="form-control" name="details" onChange={this.handleInputChange} value={this.state.details} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-4 form-control-label">Account</label>
                <div className="col-md-8">
                  <select placeholder="Konto" className="form-control">
                    <option value="Portfel">Portfel</option>
                    <option value="mbank">Karta mbank</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-4 form-control-label">Transaction date</label>
                </div>
              <div className="form-group row">
                <label className="col-md-4 form-control-label">Notes</label>
                <div className="col-md-8">
                  <input type="text" className="form-control" name="notes" onChange={this.handleInputChange} value={this.state.notes} />
                </div>
              </div>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleOKClick}>Save</Button>
            <Button color="secondary" onClick={this.handleCancelClick}>Cancel</Button>
          </ModalFooter>
        </Modal>
      )
    }
  }
}